import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import TeamSection from '../../components/features/testimonials/TeamSection';
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { AboutContainer } from './About.styles';

const About = () => {
  const storySection = useIntersectionObserver({ threshold: 0.2 });
  const missionSection = useIntersectionObserver({ threshold: 0.2 });
  const ctaSection = useIntersectionObserver({ threshold: 0.2 });

  return (
    <Layout>
      <AboutContainer>
        <header className="hero-section hero-about" role="banner">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Sobre a Clínica Sorriso Perfeito</h1>
              <p className="hero-subtitle">
              Cuidando do seu sorriso com excelência e humanização desde 2014
              </p>
            </div>
          </div>
        </header>

        <section
          ref={storySection.elementRef}
          className={`our-story ${storySection.hasBeenVisible ? 'animate-in' : ''}`}
          role="region"
          aria-labelledby="story-title"
        >
          <div className="container">
            <div className="story-content">
              <h2 id="story-title" className="section-title">Nossa História</h2>
              <div className="story-text">
                <p>
                A Clínica Sorriso Perfeito nasceu em 2014 do sonho da Dra. Maria de democratizar o acesso aos cuidados odontológicos de qualidade na Vila Madalena.
                </p>
                <p>
                Com mais de 15 anos de experiência e centenas de sorrisos transformados, nossa missão é proporcionar tratamentos odontológicos humanizados, utilizando tecnologia de ponta em um ambiente acolhedor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />

        <section
          ref={missionSection.elementRef}
          className={`mission-vision ${missionSection.hasBeenVisible ? 'animate-in' : ''}`}
          role="region"
          aria-labelledby="mission-vision-title"
        >
          <div className="container">
            <h2 id="mission-vision-title" className="visually-hidden">Missão, Visão e Valores</h2>
            <div className="mission-vision-grid" role="group" aria-label="Nossos princípios">
              <article className="mission-card">
                <div className="card-icon" aria-hidden="true">
                  <FaBullseye />
                </div>
                <h3>Nossa Missão</h3>
                <p>
                Proporcionar tratamentos odontológicos de excelência,
                com atendimento humanizado e tecnologia de ponta,
                transformando sorrisos e vidas.
                </p>
              </article>

              <article className="vision-card">
                <div className="card-icon" aria-hidden="true">
                  <FaEye />
                </div>
                <h3>Nossa Visão</h3>
                <p>
                Ser referência em odontologia na Vila Madalena,
                reconhecida pela qualidade dos tratamentos e
                pela satisfação dos nossos pacientes.
                </p>
              </article>

              <article className="values-card">
                <div className="card-icon" aria-hidden="true">
                  <FaGem />
                </div>
                <h3>Nossos Valores</h3>
                <p>
                Ética, transparência, excelência técnica,
                atendimento humanizado e compromisso com
                a saúde bucal dos nossos pacientes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          ref={ctaSection.elementRef}
          className={`cta-section ${ctaSection.hasBeenVisible ? 'animate-in' : ''}`}
          role="region"
          aria-labelledby="cta-title"
        >
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-title">Pronto para transformar seu sorriso?</h2>
              <p>Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos.</p>
              <nav className="cta-buttons" aria-label="Ações principais">
                <Link
                  to="/contato"
                  className="btn btn-primary"
                  aria-label="Ir para página de contato para agendar consulta"
                >
                Agendar Consulta
                </Link>
                <Link
                  to="/servicos"
                  className="btn btn-secondary"
                  aria-label="Ver página completa de todos os serviços"
                >
                Ver Serviços
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </AboutContainer>
    </Layout>
  );
};

export default About;