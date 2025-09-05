// Helper para resolver paths de assets no GitHub Pages
export const getAssetPath = (path) => {
  const baseUrl = import.meta.env.MODE === 'production' 
    ? '/clinica-sorriso-perfeito' 
    : '';
  
  return `${baseUrl}${path}`;
};

// Helper específico para imagens da gallery
export const getGalleryImagePath = (imageName) => {
  return getAssetPath(`/gallery/${imageName}`);
};