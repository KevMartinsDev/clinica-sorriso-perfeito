import { Helmet } from 'react-helmet-async';
import Layout from '../components/common/Layout';
import ImageGallery from '../components/gallery/ImageGallery';

const Galeria = () => {
  return (
    <>
      <Helmet>
        <title>Galeria de Casos de Sucesso | Clínica Sorriso Perfeito</title>
        <meta 
          name="description" 
          content="Veja nossa galeria com casos de sucesso em ortodontia, estética dental, implantes e tratamentos odontológicos. Transformações reais de pacientes."
        />
        <meta 
          name="keywords" 
          content="galeria odontológica, casos de sucesso, antes e depois, ortodontia, estética dental, implantes, clareamento"
        />
        <meta property="og:title" content="Galeria de Casos de Sucesso | Clínica Sorriso Perfeito" />
        <meta property="og:description" content="Conheça nossos casos de sucesso e transformações em tratamentos odontológicos." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Layout>
        <ImageGallery />
      </Layout>
    </>
  );
};

export default Galeria;