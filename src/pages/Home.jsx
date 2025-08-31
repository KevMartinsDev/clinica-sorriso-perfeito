import Layout from '../components/common/Layout';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import ContactInfo from '../components/home/ContactInfo';
import WhatsAppFloat from '../components/common/WhatsAppFloat';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <ContactInfo />
      <WhatsAppFloat />
    </Layout>
  );
};

export default Home;