import { useEffect, useRef, useCallback } from 'react';
import { usePerformanceMonitor } from './usePerformanceMonitor';

export const useBlogPerformance = (postsCount, searchTerm, selectedTag) => {
  const searchStartTime = useRef(null);
  const renderStartTime = useRef(null);

  const measureSearchStart = useCallback(() => {
    searchStartTime.current = performance.now();
  }, []);

  const measureSearchEnd = useCallback(() => {
    if (searchStartTime.current) {
      const searchTime = performance.now() - searchStartTime.current;
      if (window.gtag) {
        window.gtag('event', 'blog_search_performance', {
          custom_parameter_1: searchTime,
          custom_parameter_2: postsCount
        });
      }
      searchStartTime.current = null;
    }
  }, [postsCount]);

  useEffect(() => {
    renderStartTime.current = performance.now();

    return () => {
      if (renderStartTime.current) {
        const renderTime = performance.now() - renderStartTime.current;
      }
    };
  }, [postsCount, searchTerm, selectedTag]);

  const preloadImages = useCallback((posts) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        posts.slice(0, 3).forEach(post => {
          if (post.image) {
            const img = new Image();
            img.src = post.image;
          }
        });
      });
    }
  }, []);

  const monitorMemory = useCallback(() => {
    if ('memory' in performance) {
      const memInfo = performance.memory;
      if (memInfo.usedJSHeapSize > 50000000) {
        console.warn('High memory usage detected:', {
          used: (memInfo.usedJSHeapSize / 1048576).toFixed(2) + 'MB',
          total: (memInfo.totalJSHeapSize / 1048576).toFixed(2) + 'MB'
        });
      }
    }
  }, []);



  const trackReadingTime = useCallback((postId, timeSpent) => {
    if (window.gtag && timeSpent > 1000) {
      window.gtag('event', 'blog_reading_time', {
        custom_parameter_1: postId,
        value: Math.round(timeSpent / 1000),
        custom_parameter_2: 'reading_engagement'
      });
    }
  }, []);

  return {
    measureSearchStart,
    measureSearchEnd,
    preloadImages,
    monitorMemory,
    trackReadingTime,
    performanceData: null
  };
};