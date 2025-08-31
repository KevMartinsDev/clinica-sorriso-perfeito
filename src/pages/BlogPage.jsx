import { Helmet } from 'react-helmet-async';
import Layout from '../components/common/Layout';
import BlogList from '../components/blog/BlogList';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog Odontológico | Clínica Sorriso Perfeito</title>
        <meta 
          name="description" 
          content="Blog com dicas de saúde bucal, cuidados dentários e informações sobre tratamentos odontológicos. Conteúdo atualizado por especialistas."
        />
        <meta 
          name="keywords" 
          content="blog odontológico, saúde bucal, dicas dentárias, cuidados orais, ortodontia, implantes, clareamento dental"
        />
        <meta property="og:title" content="Blog Odontológico | Clínica Sorriso Perfeito" />
        <meta property="og:description" content="Informações valiosas sobre saúde bucal e cuidados dentários por especialistas." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Layout>
        <BlogList />
      </Layout>
    </>
  );
};

export default BlogPage;