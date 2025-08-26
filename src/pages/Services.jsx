import { servicesDetailed, additionalInfo } from '../data/services-detailed';

const Services = () => {
  return (
    <div className="services-page">
      <div className="hero-section hero-services">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Nossos Serviços</h1>
            <p className="hero-subtitle">
              Tratamentos completos com a mais alta qualidade e tecnologia de ponta
            </p>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          {Object.entries(servicesDetailed).map(([key, category]) => (
            <div key={key} className="service-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="services-grid">
                {category.services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-info">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-price">{service.price}</span>
                    </div>
                    <button className="btn btn-outline btn-small">
                      Saiba mais
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="payment-info">
        <div className="container">
          <div className="payment-info-grid">
            <div className="info-card">
              <div className="info-icon">💳</div>
              <h3>Parcelamento</h3>
              <p>{additionalInfo.financing}</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏥</div>
              <h3>Convênios</h3>
              <div className="insurance-list">
                {additionalInfo.insurance.map((insurance, index) => (
                  <span key={index} className="insurance-item">{insurance}</span>
                ))}
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>Orçamento</h3>
              <p>{additionalInfo.customQuote}</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h3>Preços válidos</h3>
              <p>Até {additionalInfo.validUntil}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interessado em algum tratamento?</h2>
            <p>
              Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="btn btn-primary">
                Agendar Consulta
              </a>
              <a 
                href="https://wa.me/5599916793000?text=Olá! Gostaria de saber mais sobre os serviços da clínica." 
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-preview">
        <div className="container">
          <h2 className="section-title">O que nossos pacientes dizem</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito."
              </p>
              <div className="testimonial-author">- Maria Silva</div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas."
              </p>
              <div className="testimonial-author">- João Santos</div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!"
              </p>
              <div className="testimonial-author">- Ana Costa</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;