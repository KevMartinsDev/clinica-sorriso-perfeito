export const galleryImages = [
  {
    id: 1,
    src: '/gallery/alinhamento.jpg',
    thumbnail: '/gallery/alinhamento.jpg',
    category: 'ortodontia',
    title: 'Alinhamento completo em 18 meses',
    description: 'Transformação completa do sorriso através de tratamento ortodôntico'
  },
  {
    id: 2,
    src: '/gallery/aparelho.jpg',
    thumbnail: '/gallery/aparelho.jpg',
    category: 'ortodontia',
    title: 'Aparelho estético discreto',
    description: 'Resultado natural com aparelho transparente'
  },
  {
    id: 3,
    src: '/gallery/correção de mordida.jpg',
    thumbnail: '/gallery/correção de mordida.jpg',
    category: 'ortodontia',
    title: 'Correção de mordida cruzada',
    description: 'Problema funcional resolvido com ortodontia'
  },
  {
    id: 4,
    src: '/gallery/resultado em adolecente.jpg',
    thumbnail: '/gallery/resultado em adolecente.jpg',
    category: 'ortodontia',
    title: 'Resultado em adolescente',
    description: 'Tratamento ortodôntico preventivo bem-sucedido'
  },
  {
    id: 5,
    src: '/gallery/clareamento.jpg',
    thumbnail: '/gallery/clareamento.jpg',
    category: 'estetica',
    title: 'Clareamento com 8 tons a mais',
    description: 'Resultado impressionante do clareamento profissional'
  },
  {
    id: 6,
    src: '/gallery/facetas de porcelana.jpg',
    thumbnail: '/gallery/facetas de porcelana.jpg',
    category: 'estetica',
    title: 'Facetas de porcelana naturais',
    description: 'Transformação sutil e natural com facetas'
  },
  {
    id: 7,
    src: '/gallery/harmonização de sorriso.jpg',
    thumbnail: '/gallery/harmonização de sorriso.jpg',
    category: 'estetica',
    title: 'Harmonização do sorriso',
    description: 'Equilíbrio perfeito entre forma e função'
  },
  {
    id: 8,
    src: '/gallery/transformação.jpg',
    thumbnail: '/gallery/transformação.jpg',
    category: 'estetica',
    title: 'Transformação completa',
    description: 'Mudança radical com tratamento estético integrado'
  },
  {
    id: 9,
    src: '/gallery/correção de formato.jpg',
    thumbnail: '/gallery/correção de formato.jpg',
    category: 'estetica',
    title: 'Correção de formato',
    description: 'Dentes uniformes através de procedimento estético'
  },
  {
    id: 10,
    src: '/gallery/implante unitário.jpg',
    thumbnail: '/gallery/implante unitário.jpg',
    category: 'implantes',
    title: 'Implante unitário anterior',
    description: 'Substituição de dente perdido com implante'
  },
  {
    id: 11,
    src: '/gallery/Protocolo superior.jpg',
    thumbnail: '/gallery/Protocolo superior.jpg',
    category: 'implantes',
    title: 'Protocolo superior completo',
    description: 'Reabilitação total com implantes múltiplos'
  },
  {
    id: 12,
    src: '/gallery/exorto ósseo.jpg',
    thumbnail: '/gallery/exorto ósseo.jpg',
    category: 'implantes',
    title: 'Enxerto ósseo bem-sucedido',
    description: 'Preparação perfeita para implante'
  },
  {
    id: 13,
    src: '/gallery/prótese sobre implante.jpg',
    thumbnail: '/gallery/prótese sobre implante.jpg',
    category: 'implantes',
    title: 'Prótese sobre implante',
    description: 'Resultado final com prótese fixa'
  },
  {
    id: 14,
    src: '/gallery/restauração.jpg',
    thumbnail: '/gallery/restauração.jpg',
    category: 'geral',
    title: 'Restauração em resina',
    description: 'Reparo funcional e estético'
  },
  {
    id: 15,
    src: '/gallery/limpeza profunda.jpg',
    thumbnail: '/gallery/limpeza profunda.jpg',
    category: 'geral',
    title: 'Limpeza profunda',
    description: 'Resultado da profilaxia profissional'
  },
  {
    id: 16,
    src: '/gallery/Tratamento de caries.jpg',
    thumbnail: '/gallery/Tratamento de caries.jpg',
    category: 'geral',
    title: 'Tratamento de cárie',
    description: 'Dente salvo com restauração conservadora'
  },
  {
    id: 17,
    src: '/gallery/consultório.jpg',
    thumbnail: '/gallery/consultório.jpg',
    category: 'instalacoes',
    title: 'Consultório moderno',
    description: 'Ambiente acolhedor e tecnologia avançada'
  },
  {
    id: 18,
    src: '/gallery/A imagem sala de espera.jpg',
    thumbnail: '/gallery/A imagem sala de espera.jpg',
    category: 'instalacoes',
    title: 'Sala de espera aconchegante',
    description: 'Conforto e tranquilidade para nossos pacientes'
  }
];

export const galleryCategories = [
  { id: 'todos', name: 'Todos', count: galleryImages.length },
  { id: 'ortodontia', name: 'Ortodontia', count: galleryImages.filter(img => img.category === 'ortodontia').length },
  { id: 'estetica', name: 'Estética Dental', count: galleryImages.filter(img => img.category === 'estetica').length },
  { id: 'implantes', name: 'Implantes', count: galleryImages.filter(img => img.category === 'implantes').length },
  { id: 'geral', name: 'Clínica Geral', count: galleryImages.filter(img => img.category === 'geral').length },
  { id: 'instalacoes', name: 'Instalações', count: galleryImages.filter(img => img.category === 'instalacoes').length }
];