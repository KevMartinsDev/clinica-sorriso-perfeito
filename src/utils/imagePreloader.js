const createImagePreloader = () => {
  const preloadedImages = new Map();
  const loadingQueue = new Set();

  const preloadImage = (src, priority = 'low') => {
    if (preloadedImages.has(src) || loadingQueue.has(src)) {
      return preloadedImages.get(src) || Promise.resolve();
    }

    const promise = new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        preloadedImages.set(src, promise);
        loadingQueue.delete(src);
        resolve(img);
      };

      img.onerror = () => {
        loadingQueue.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };

      img.loading = 'eager';
      img.decoding = 'async';

      img.src = src;
    });

    loadingQueue.add(src);
    return promise;
  };

  const preloadImageBatch = (imageList, batchSize = 3) => {
    const batches = [];
    for (let i = 0; i < imageList.length; i += batchSize) {
      batches.push(imageList.slice(i, i + batchSize));
    }

    return batches.reduce(
      (prevBatch, currentBatch) =>
        prevBatch.then(() =>
          Promise.allSettled(
            currentBatch.map(src => preloadImage(src))
          )
        ),
      Promise.resolve()
    );
  };

  const getPreloadedImage = (src) => {
    return preloadedImages.get(src);
  };

  const clearCache = () => {
    preloadedImages.clear();
    loadingQueue.clear();
  };

  const getCacheStats = () => {
    return {
      preloaded: preloadedImages.size,
      loading: loadingQueue.size,
      totalRequested: preloadedImages.size + loadingQueue.size
    };
  };

  return {
    preloadImage,
    preloadImageBatch,
    getPreloadedImage,
    clearCache,
    getCacheStats
  };
};

export default createImagePreloader();