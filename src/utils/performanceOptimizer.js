export const scheduleWork = (task, items, chunkSize = 5) => {
  return new Promise((resolve) => {
    let index = 0;
    const results = [];

    const processChunk = () => {
      const startTime = performance.now();

      while (index < items.length && (performance.now() - startTime) < 5) {
        const item = items[index];
        const result = task(item, index);
        results.push(result);
        index++;
      }

      if (index < items.length) {
        if ('scheduler' in window && window.scheduler.postTask) {
          window.scheduler.postTask(processChunk, { priority: 'user-blocking' });
        } else {
          setTimeout(processChunk, 0);
        }
      } else {
        resolve(results);
      }
    };

    processChunk();
  });
};

export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const runWhenIdle = (callback, options = {}) => {
  const { timeout = 5000 } = options;

  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout });
  } else {
    return setTimeout(callback, 0);
  }
};

export const optimizeImageLoading = (images) => {
  if (!('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );

  images.forEach(img => {
    if (typeof img === 'string') {
      document.querySelectorAll(img).forEach(element => {
        imageObserver.observe(element);
      });
    } else {
      imageObserver.observe(img);
    }
  });

  return imageObserver;
};

export const preloadCriticalResources = (resources) => {
  runWhenIdle(() => {
    resources.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';

      if (url.includes('.css')) {
        link.as = 'style';
      } else if (url.includes('.js')) {
        link.as = 'script';
      } else if (url.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
        link.as = 'image';
      } else if (url.match(/\.(woff|woff2|ttf|otf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      }

      link.href = url;
      document.head.appendChild(link);
    });
  });
};

export const withRenderOptimization = (componentName, renderFunction) => {
  return (...args) => {
    const startTime = performance.now();

    const result = renderFunction(...args);

    const renderTime = performance.now() - startTime;

    if (renderTime > 16) {
      runWhenIdle(() => {
        console.info(`${componentName} render: ${renderTime.toFixed(2)}ms`);

        if (renderTime > 100 && window.gtag) {
          window.gtag('event', 'performance_warning', {
            custom_parameter_1: 'slow_render',
            custom_parameter_2: componentName,
            value: Math.round(renderTime)
          });
        }
      });
    }

    return result;
  };
};

export const processInBatches = async (operation, data, batchSize = 10) => {
  const results = [];

  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);


    const batchResults = batch.map(operation);
    results.push(...batchResults);

    if (i + batchSize < data.length) {
      await new Promise(resolve => {
        if ('scheduler' in window && window.scheduler.postTask) {
          window.scheduler.postTask(resolve, { priority: 'background' });
        } else {
          setTimeout(resolve, 0);
        }
      });
    }
  }

  return results;
};

export const memoizeWithCleanup = (fn, maxSize = 50) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn(...args);

    cache.set(key, result);

    if (cache.size > maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  };
};

export default {
  scheduleWork,
  debounce,
  throttle,
  runWhenIdle,
  optimizeImageLoading,
  preloadCriticalResources,
  withRenderOptimization,
  processInBatches,
  memoizeWithCleanup
};