import alinhamentoImg from '../assets/images/gallery/alinhamento.jpg';
import aparelhoImg from '../assets/images/gallery/aparelho.jpg';
import correcaoMordidaImg from '../assets/images/gallery/correção de mordida.jpg';
import resultadoAdolecenteImg from '../assets/images/gallery/resultado em adolecente.jpg';
import clareamentoImg from '../assets/images/gallery/clareamento.jpg';
import facetasPorcelanaImg from '../assets/images/gallery/facetas de porcelana.jpg';
import harmonizacaoSorrisoImg from '../assets/images/gallery/harmonização de sorriso.jpg';
import transformacaoImg from '../assets/images/gallery/transformação.jpg';
import correcaoFormatoImg from '../assets/images/gallery/correção de formato.jpg';
import implanteUnitarioImg from '../assets/images/gallery/implante unitário.jpg';
import protocoloSuperiorImg from '../assets/images/gallery/Protocolo superior.jpg';
import enxertoOsseoImg from '../assets/images/gallery/exorto ósseo.jpg';
import proteseSobreImplanteImg from '../assets/images/gallery/prótese sobre implante.jpg';
import restauracaoImg from '../assets/images/gallery/restauração.jpg';
import limpezaProfundaImg from '../assets/images/gallery/limpeza profunda.jpg';
import tratamentoCariesImg from '../assets/images/gallery/Tratamento de caries.jpg';
import consultorioImg from '../assets/images/gallery/consultório.jpg';
import salaEsperaImg from '../assets/images/gallery/A imagem sala de espera.jpg';

const createThumbnail = (imageSrc, quality = 0.7) => {
  if (typeof imageSrc === 'string' && imageSrc.includes('?')) {
    return `${imageSrc}&quality=${Math.round(quality * 100)}&width=400`;
  }
  return imageSrc;
};

export const galleryImages = [
  {
    id: 1,
    src: alinhamentoImg,
    thumbnail: createThumbnail(alinhamentoImg, 0.6),
    category: 'ortodontia',
    title: 'Alinhamento completo em 18 meses',
    description: 'Transformação completa do sorriso através de tratamento ortodôntico'
  },
  {
    id: 2,
    src: aparelhoImg,
    thumbnail: createThumbnail(aparelhoImg, 0.6),
    category: 'ortodontia',
    title: 'Aparelho estético discreto',
    description: 'Resultado natural com aparelho transparente'
  },
  {
    id: 3,
    src: correcaoMordidaImg,
    thumbnail: createThumbnail(correcaoMordidaImg, 0.6),
    category: 'ortodontia',
    title: 'Correção de mordida cruzada',
    description: 'Problema funcional resolvido com ortodontia'
  },
  {
    id: 4,
    src: resultadoAdolecenteImg,
    thumbnail: createThumbnail(resultadoAdolecenteImg, 0.6),
    category: 'ortodontia',
    title: 'Resultado em adolescente',
    description: 'Tratamento ortodôntico preventivo bem-sucedido'
  },
  {
    id: 5,
    src: clareamentoImg,
    thumbnail: createThumbnail(clareamentoImg, 0.6),
    category: 'estetica',
    title: 'Clareamento com 8 tons a mais',
    description: 'Resultado impressionante do clareamento profissional'
  },
  {
    id: 6,
    src: facetasPorcelanaImg,
    thumbnail: createThumbnail(facetasPorcelanaImg, 0.6),
    category: 'estetica',
    title: 'Facetas de porcelana naturais',
    description: 'Transformação sutil e natural com facetas'
  },
  {
    id: 7,
    src: harmonizacaoSorrisoImg,
    thumbnail: createThumbnail(harmonizacaoSorrisoImg, 0.6),
    category: 'estetica',
    title: 'Harmonização do sorriso',
    description: 'Equilíbrio perfeito entre forma e função'
  },
  {
    id: 8,
    src: transformacaoImg,
    thumbnail: createThumbnail(transformacaoImg, 0.6),
    category: 'estetica',
    title: 'Transformação completa',
    description: 'Mudança radical com tratamento estético integrado'
  },
  {
    id: 9,
    src: correcaoFormatoImg,
    thumbnail: createThumbnail(correcaoFormatoImg, 0.6),
    category: 'estetica',
    title: 'Correção de formato',
    description: 'Dentes uniformes através de procedimento estético'
  },
  {
    id: 10,
    src: implanteUnitarioImg,
    thumbnail: createThumbnail(implanteUnitarioImg, 0.6),
    category: 'implantes',
    title: 'Implante unitário anterior',
    description: 'Substituição de dente perdido com implante'
  },
  {
    id: 11,
    src: protocoloSuperiorImg,
    thumbnail: createThumbnail(protocoloSuperiorImg, 0.6),
    category: 'implantes',
    title: 'Protocolo superior completo',
    description: 'Reabilitação total com implantes múltiplos'
  },
  {
    id: 12,
    src: enxertoOsseoImg,
    thumbnail: createThumbnail(enxertoOsseoImg, 0.6),
    category: 'implantes',
    title: 'Enxerto ósseo bem-sucedido',
    description: 'Preparação perfeita para implante'
  },
  {
    id: 13,
    src: proteseSobreImplanteImg,
    thumbnail: createThumbnail(proteseSobreImplanteImg, 0.6),
    category: 'implantes',
    title: 'Prótese sobre implante',
    description: 'Resultado final com prótese fixa'
  },
  {
    id: 14,
    src: restauracaoImg,
    thumbnail: createThumbnail(restauracaoImg, 0.6),
    category: 'geral',
    title: 'Restauração em resina',
    description: 'Reparo funcional e estético'
  },
  {
    id: 15,
    src: limpezaProfundaImg,
    thumbnail: createThumbnail(limpezaProfundaImg, 0.6),
    category: 'geral',
    title: 'Limpeza profunda',
    description: 'Resultado da profilaxia profissional'
  },
  {
    id: 16,
    src: tratamentoCariesImg,
    thumbnail: createThumbnail(tratamentoCariesImg, 0.6),
    category: 'geral',
    title: 'Tratamento de cárie',
    description: 'Dente salvo com restauração conservadora'
  },
  {
    id: 17,
    src: consultorioImg,
    thumbnail: createThumbnail(consultorioImg, 0.6),
    category: 'instalacoes',
    title: 'Consultório moderno',
    description: 'Ambiente acolhedor e tecnologia avançada'
  },
  {
    id: 18,
    src: salaEsperaImg,
    thumbnail: createThumbnail(salaEsperaImg, 0.6),
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