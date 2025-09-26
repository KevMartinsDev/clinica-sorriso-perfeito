import { useEffect, useCallback, useRef } from 'react';

const PerformanceMonitor = ({ onMetrics, componentName = 'Component' }) => {
  const startTimeRef = useRef(Date.now());
  const metricsRef = useRef({
    renderCount: 0,
    totalRenderTime: 0,
    avgRenderTime: 0,
    maxRenderTime: 0,
    minRenderTime: Infinity,
    memoryUsage: 0,
    performanceEntries: []
  });

  
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];

        if (lastEntry && lastEntry.renderTime > 0) {
          metricsRef.current.lcp = lastEntry.renderTime;
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.processingStart && entry.startTime) {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            metricsRef.current.cls = clsValue;
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }, []);

  
  const measureMemory = useCallback(() => {
    if (typeof window !== 'undefined' && window.performance && window.performance.memory) {
      const memory = window.performance.memory;
      metricsRef.current.memoryUsage = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
        percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
      };
    }
  }, []);

  
  const measureRenderTime = useCallback(() => {
    const renderTime = Date.now() - startTimeRef.current;
    const metrics = metricsRef.current;

    metrics.renderCount++;
    metrics.totalRenderTime += renderTime;
    metrics.avgRenderTime = metrics.totalRenderTime / metrics.renderCount;
    metrics.maxRenderTime = Math.max(metrics.maxRenderTime, renderTime);
    metrics.minRenderTime = Math.min(metrics.minRenderTime, renderTime);

    
    if (renderTime > 16.67) { 
      console.warn(`${componentName}: Slow render detected (${renderTime.toFixed(2)}ms)`);
    }

    startTimeRef.current = Date.now();
  }, [componentName]);

 
  const measureNetworkMetrics = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        metricsRef.current.networkMetrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          tls: navigation.secureConnectionStart > 0 ?
                navigation.connectEnd - navigation.secureConnectionStart : 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          domProcessing: navigation.domContentLoadedEventStart - navigation.responseEnd,
          total: navigation.loadEventEnd - navigation.navigationStart
        };
      }

      
      const resources = performance.getEntriesByType('resource');
      metricsRef.current.resourceMetrics = resources.map(resource => ({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize || 0,
        type: resource.initiatorType
      }));

    } catch (error) {
      console.warn('Network metrics error:', error);
    }
  }, []);

  
  const reportMetrics = useCallback(() => {
    const metrics = { ...metricsRef.current };
    measureMemory();

    if (onMetrics && typeof onMetrics === 'function') {
      onMetrics(metrics);
    }

    
    const { memoryUsage, avgRenderTime } = metrics;

    if (memoryUsage && memoryUsage.percentage > 80) {
      console.warn(`${componentName}: High memory usage (${memoryUsage.percentage.toFixed(1)}%)`);
    }

    if (avgRenderTime > 10) {
      console.warn(`${componentName}: Average render time too high (${avgRenderTime.toFixed(2)}ms)`);
    }

    return metrics;
  }, [componentName, measureMemory, onMetrics]);

  
  useEffect(() => {
    measureWebVitals();
    measureNetworkMetrics();

    
    const interval = setInterval(reportMetrics, 30000); 

    return () => {
      clearInterval(interval);
      reportMetrics(); 
    };
  }, [measureWebVitals, measureNetworkMetrics, reportMetrics]);

 
  useEffect(() => {
    measureRenderTime();
  });

  return null; 
};


export const withPerformanceMonitoring = (WrappedComponent, componentName) => {
  return function PerformanceMonitoredComponent(props) {
    const handleMetrics = useCallback((metrics) => {
      if (process.env.NODE_ENV === 'development') {
        console.group(`${componentName} Performance Metrics`);
        console.table(metrics);
        console.groupEnd();
      }
    }, []);

    return (
      <>
        <PerformanceMonitor
          onMetrics={handleMetrics}
          componentName={componentName}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default PerformanceMonitor;