
export const getAssetPath = (path) => {
  const baseUrl = import.meta.env.PROD
    ? '/clinica-sorriso-perfeito'
    : '';

  return `${baseUrl}${path}`;
};


export const getGalleryImagePath = (imageName) => {
  return getAssetPath(`/gallery/${imageName}`);
};