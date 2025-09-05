/**
 * Gera uma versão reduzida/comprimida da imagem para thumbnail
 * @param {string} imageSrc - URL da imagem original
 * @param {number} quality - Qualidade da compressão (0.1 a 1.0)
 * @param {number} maxWidth - Largura máxima da thumbnail
 * @param {number} maxHeight - Altura máxima da thumbnail
 * @returns {Promise<string>} - Data URL da imagem comprimida
 */
export const createThumbnail = (imageSrc, quality = 0.85, maxWidth = 500, maxHeight = 400) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Calculate new dimensions maintaining aspect ratio
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
      
      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Draw and compress with better quality
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to higher quality JPEG
      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedDataUrl);
    };
    
    img.onerror = () => {
      // If compression fails, return original
      resolve(imageSrc);
    };
    
    img.src = imageSrc;
  });
};

/**
 * Gera placeholder blur de baixa qualidade
 * @param {string} imageSrc - URL da imagem original
 * @returns {Promise<string>} - Data URL do placeholder blur
 */
export const createBlurPlaceholder = (imageSrc) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Very small dimensions for blur effect
      canvas.width = 20;
      canvas.height = 15;
      
      ctx.filter = 'blur(2px)';
      ctx.drawImage(img, 0, 0, 20, 15);
      
      const blurDataUrl = canvas.toDataURL('image/jpeg', 0.1);
      resolve(blurDataUrl);
    };
    
    img.onerror = () => {
      // Create simple gray placeholder
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

/**
 * Simula diferentes qualidades de imagem baseado no tamanho da tela
 */
export const getOptimalImageSrc = (originalSrc, isHighRes = false) => {
  if (isHighRes) {
    return originalSrc; // Full quality for lightbox
  }
  
  // For thumbnails, we can add query parameters or use a different approach
  // Since we don't have an image server, we'll rely on CSS and compression
  return originalSrc;
};

/**
 * Pre-carrega imagem de forma otimizada
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};