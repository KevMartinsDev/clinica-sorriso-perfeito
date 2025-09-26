import { useEffect, useRef, useCallback } from 'react';

const usePerformanceMonitor = (componentName) => {
  const renderCountRef = useRef(0);
  const startTimeRef = useRef(Date.now());
  const lastSlowRenderWarningRef = useRef(0);
  const lastExcessiveRenderWarningRef = useRef(0);
  const performanceMetrics = useRef({
    renderCount: 0,
    averageRenderTime: 0,
    totalRenderTime: 0,
    slowestRender: 0,
    fastestRender: Infinity
  });

  useEffect(() => {
    renderCountRef.current++;
    const renderTime = Date.now() - startTimeRef.current;

    const metrics = performanceMetrics.current;
    metrics.renderCount = renderCountRef.current;
    metrics.totalRenderTime += renderTime;
    metrics.averageRenderTime = metrics.totalRenderTime / metrics.renderCount;
    metrics.slowestRender = Math.max(metrics.slowestRender, renderTime);
    metrics.fastestRender = Math.min(metrics.fastestRender, renderTime);

    
    if (renderTime > 150) {
      const now = Date.now();
      if (!lastSlowRenderWarningRef.current || now - lastSlowRenderWarningRef.current > 10000) {
        console.warn(`${componentName}: Critical slow render detected (${renderTime.toFixed(1)}ms)`);
        lastSlowRenderWarningRef.current = now;

        
        if (window.gtag) {
          window.gtag('event', 'performance_issue', {
            custom_parameter_1: 'slow_render',
            custom_parameter_2: componentName,
            value: Math.round(renderTime)
          });
        }
      }
    }

    
    if (renderCountRef.current > 50) {
      const now = Date.now();
      if (!lastExcessiveRenderWarningRef.current || now - lastExcessiveRenderWarningRef.current > 30000) {
        console.warn(`${componentName}: Excessive render count detected (${renderCountRef.current})`);
        lastExcessiveRenderWarningRef.current = now;

        
        if (renderCountRef.current > 100) {
          console.warn(`${componentName}: Resetting render count to prevent spam`);
          renderCountRef.current = 0;
          performanceMetrics.current.renderCount = 0;
        }
      }
    }

    startTimeRef.current = Date.now();
  });

  const logMetrics = useCallback(() => {
    console.group(`${componentName} Performance Metrics`);
    console.log('Render Count:', performanceMetrics.current.renderCount);
    console.log('Average Render Time:', performanceMetrics.current.averageRenderTime.toFixed(2), 'ms');
    console.log('Slowest Render:', performanceMetrics.current.slowestRender, 'ms');
    console.log('Fastest Render:', performanceMetrics.current.fastestRender === Infinity ? 'N/A' : performanceMetrics.current.fastestRender, 'ms');
    console.groupEnd();
  }, [componentName]);

  const resetMetrics = useCallback(() => {
    renderCountRef.current = 0;
    performanceMetrics.current = {
      renderCount: 0,
      averageRenderTime: 0,
      totalRenderTime: 0,
      slowestRender: 0,
      fastestRender: Infinity
    };
  }, []);

  return {
    metrics: performanceMetrics.current,
    logMetrics,
    resetMetrics
  };
};

export { usePerformanceMonitor };
export default usePerformanceMonitor;