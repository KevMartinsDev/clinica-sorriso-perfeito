import Layout from '../components/common/Layout';
import TeamSection from '../components/about/TeamSection';
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
      <div className="hero-section hero-about">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Sobre a Clínica Sorriso Perfeito</h1>
            <p className="hero-subtitle">
              Cuidando do seu sorriso com excelência e humanização desde 2014
            </p>
          </div>
        </div>
      </div>

      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Nossa História</h2>
            <div className="story-text">
              <p>
                A Clínica Sorriso Perfeito nasceu em 2014 do sonho da Dra. Maria 
                de democratizar o acesso aos cuidados odontológicos de qualidade na Vila Madalena.
              </p>
              <p>
                Com mais de 15 anos de experiência e centenas de sorrisos transformados, 
                nossa missão é proporcionar tratamentos odontológicos humanizados, utilizando 
                tecnologia de ponta em um ambiente acolhedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <FaBullseye />
              </div>
              <h3>Nossa Missão</h3>
              <p>
                Proporcionar tratamentos odontológicos de excelência, 
                com atendimento humanizado e tecnologia de ponta, 
                transformando sorrisos e vidas.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon">
                <FaEye />
              </div>
              <h3>Nossa Visão</h3>
              <p>
                Ser referência em odontologia na Vila Madalena, 
                reconhecida pela qualidade dos tratamentos e 
                pela satisfação dos nossos pacientes.
              </p>
            </div>
            
            <div className="values-card">
              <div className="card-icon">
                <FaGem />
              </div>
              <h3>Nossos Valores</h3>
              <p>
                Ética, transparência, excelência técnica, 
                atendimento humanizado e compromisso com 
                a saúde bucal dos nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para transformar seu sorriso?</h2>
            <p>Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos.</p>
            <div className="cta-buttons">
              <a href="/contato" className="btn btn-primary">
                Agendar Consulta
              </a>
              <a href="/servicos" className="btn btn-secondary">
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default About;