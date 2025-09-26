import Layout from '../../components/layout/Layout';
import Hero from '../../components/features/home/Hero';
import ServicesPreview from '../../components/features/home/ServicesPreview';
import Testimonials from '../../components/features/testimonials/Testimonials';
import ContactInfo from '../../components/features/home/ContactInfo';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Hero />
        <ServicesPreview />
        <Testimonials />
        <ContactInfo />
        <WhatsAppFloat />
      </HomeContainer>
    </Layout>
  );
};

export default Home;