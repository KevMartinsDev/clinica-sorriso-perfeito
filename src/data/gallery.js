import { getGalleryImagePath } from '../utils/assetHelpers';

// Dados das imagens sem paths
const rawGalleryData = [
  { id: 1, filename: 'alinhamento.jpg', category: 'ortodontia', title: 'Alinhamento completo em 18 meses', description: 'Transformação completa do sorriso através de tratamento ortodôntico' },
  { id: 2, filename: 'aparelho.jpg', category: 'ortodontia', title: 'Aparelho estético discreto', description: 'Resultado natural com aparelho transparente' },
  { id: 3, filename: 'correção de mordida.jpg', category: 'ortodontia', title: 'Correção de mordida cruzada', description: 'Problema funcional resolvido com ortodontia' },
  { id: 4, filename: 'resultado em adolecente.jpg', category: 'ortodontia', title: 'Resultado em adolescente', description: 'Tratamento ortodôntico preventivo bem-sucedido' },
  { id: 5, filename: 'clareamento.jpg', category: 'estetica', title: 'Clareamento com 8 tons a mais', description: 'Resultado impressionante do clareamento profissional' },
  { id: 6, filename: 'facetas de porcelana.jpg', category: 'estetica', title: 'Facetas de porcelana naturais', description: 'Transformação sutil e natural com facetas' },
  { id: 7, filename: 'harmonização de sorriso.jpg', category: 'estetica', title: 'Harmonização do sorriso', description: 'Equilíbrio perfeito entre forma e função' },
  { id: 8, filename: 'transformação.jpg', category: 'estetica', title: 'Transformação completa', description: 'Mudança radical com tratamento estético integrado' },
  { id: 9, filename: 'correção de formato.jpg', category: 'estetica', title: 'Correção de formato', description: 'Dentes uniformes através de procedimento estético' },
  { id: 10, filename: 'implante unitário.jpg', category: 'implantes', title: 'Implante unitário anterior', description: 'Substituição de dente perdido com implante' },
  { id: 11, filename: 'Protocolo superior.jpg', category: 'implantes', title: 'Protocolo superior completo', description: 'Reabilitação total com implantes múltiplos' },
  { id: 12, filename: 'exorto ósseo.jpg', category: 'implantes', title: 'Enxerto ósseo bem-sucedido', description: 'Preparação perfeita para implante' },
  { id: 13, filename: 'prótese sobre implante.jpg', category: 'implantes', title: 'Prótese sobre implante', description: 'Resultado final com prótese fixa' },
  { id: 14, filename: 'restauração.jpg', category: 'geral', title: 'Restauração em resina', description: 'Reparo funcional e estético' },
  { id: 15, filename: 'limpeza profunda.jpg', category: 'geral', title: 'Limpeza profunda', description: 'Resultado da profilaxia profissional' },
  { id: 16, filename: 'Tratamento de caries.jpg', category: 'geral', title: 'Tratamento de cárie', description: 'Dente salvo com restauração conservadora' },
  { id: 17, filename: 'consultório.jpg', category: 'instalacoes', title: 'Consultório moderno', description: 'Ambiente acolhedor e tecnologia avançada' },
  { id: 18, filename: 'A imagem sala de espera.jpg', category: 'instalacoes', title: 'Sala de espera aconchegante', description: 'Conforto e tranquilidade para nossos pacientes' }
];

// Export das imagens com paths corretos
export const galleryImages = rawGalleryData.map(item => ({
  ...item,
  src: getGalleryImagePath(item.filename),
  thumbnail: getGalleryImagePath(item.filename)
}));

export const galleryCategories = [
  { id: 'todos', name: 'Todos', count: rawGalleryData.length },
  { id: 'ortodontia', name: 'Ortodontia', count: rawGalleryData.filter(img => img.category === 'ortodontia').length },
  { id: 'estetica', name: 'Estética Dental', count: rawGalleryData.filter(img => img.category === 'estetica').length },
  { id: 'implantes', name: 'Implantes', count: rawGalleryData.filter(img => img.category === 'implantes').length },
  { id: 'geral', name: 'Clínica Geral', count: rawGalleryData.filter(img => img.category === 'geral').length },
  { id: 'instalacoes', name: 'Instalações', count: rawGalleryData.filter(img => img.category === 'instalacoes').length }
];