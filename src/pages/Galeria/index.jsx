import { Helmet } from 'react-helmet-async';
import Layout from '../../components/layout/Layout';
import ImageGallery from '../../components/features/gallery/ImageGallery';
import { GaleriaContainer } from './Galeria.styles';
import { galleryImages } from '../../data/gallery';

const Galeria = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galeria de Casos de Sucesso - Clínica Sorriso Perfeito",
    "description": "Galeria com casos reais de sucesso em tratamentos odontológicos, incluindo ortodontia, estética dental, implantes e procedimentos clínicos.",
    "provider": {
      "@type": "Dentist",
      "name": "Clínica Sorriso Perfeito",
      "url": "https://clinica-sorriso-perfeito.com"
    },
    "image": galleryImages.slice(0, 10).map(img => ({
      "@type": "ImageObject",
      "url": img.src,
      "name": img.title,
      "description": img.description,
      "contentUrl": img.src
    })),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://clinica-sorriso-perfeito.com/galeria"
    }
  };

  return (
    <>
      <Helmet>
        <title>Galeria de Casos de Sucesso | Clínica Sorriso Perfeito</title>
        <meta
          name="description"
          content="Veja nossa galeria com casos de sucesso em ortodontia, estética dental, implantes e tratamentos odontológicos. Transformações reais de pacientes com resultados comprovados."
        />
        <meta
          name="keywords"
          content="galeria odontológica, casos de sucesso, antes e depois, ortodontia, estética dental, implantes, clareamento, transformação sorriso, dentista, clínica dental"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Clínica Sorriso Perfeito" />
        <link rel="canonical" href="https://clinica-sorriso-perfeito.com/galeria" />

        <meta property="og:title" content="Galeria de Casos de Sucesso | Clínica Sorriso Perfeito" />
        <meta property="og:description" content="Conheça nossos casos de sucesso e transformações em tratamentos odontológicos. Resultados reais que falam por si." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinica-sorriso-perfeito.com/galeria" />
        <meta property="og:site_name" content="Clínica Sorriso Perfeito" />
        <meta property="og:locale" content="pt_BR" />
        {galleryImages[0] && (
          <meta property="og:image" content={galleryImages[0].src} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeria de Casos de Sucesso | Clínica Sorriso Perfeito" />
        <meta name="twitter:description" content="Veja transformações reais em nossa galeria de casos de sucesso." />
        {galleryImages[0] && (
          <meta name="twitter:image" content={galleryImages[0].src} />
        )}

        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Layout>
        <GaleriaContainer>
          <ImageGallery />
        </GaleriaContainer>
      </Layout>
    </>
  );
};

export default Galeria;