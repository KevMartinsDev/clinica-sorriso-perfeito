export const createThumbnail = (imageSrc, quality = 0.85, maxWidth = 500, maxHeight = 400) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      let { width, height } = img;
      
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      ctx.drawImage(img, 0, 0, width, height);
      
      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedDataUrl);
    };
    
    img.onerror = () => {
      resolve(imageSrc);
    };
    
    img.src = imageSrc;
  });
};

export const createBlurPlaceholder = (imageSrc) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = 20;
      canvas.height = 15;
      
      ctx.filter = 'blur(2px)';
      ctx.drawImage(img, 0, 0, 20, 15);
      
      const blurDataUrl = canvas.toDataURL('image/jpeg', 0.1);
      resolve(blurDataUrl);
    };
    
    img.onerror = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 20;
      canvas.height = 15;
      ctx.fillStyle = '#e0e0e0';
      ctx.fillRect(0, 0, 20, 15);
      resolve(canvas.toDataURL());
    };
    
    img.src = imageSrc;
  });
};

export const getOptimalImageSrc = (originalSrc, isHighRes = false) => {
  if (isHighRes) {
    return originalSrc;
  }
  
  return originalSrc;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};