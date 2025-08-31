import Layout from '../components/common/Layout';
import ContactForm from '../components/forms/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaMap, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
      <div className="hero-section hero-contact">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Entre em Contato</h1>
            <p className="hero-subtitle">
              Estamos prontos para cuidar do seu sorriso. Fale conosco!
            </p>
          </div>
        </div>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-section">
                <h2>Informações de Contato</h2>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-details">
                    <h3>Endereço</h3>
                    <p>
                      Rua das Flores, 123<br />
                      Vila Madalena, São Paulo - SP<br />
                      CEP: 05462-000
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-details">
                    <h3>Telefone</h3>
                    <p>(55) 99 9167-9300</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="info-details">
                    <h3>WhatsApp</h3>
                    <p>
                      <a 
                        href="https://wa.me/555591679300" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                      >
                        (55) 55 9167-9300
                      </a>
                    </p>
                  </div>
                </div>

              </div>

              <div className="hours-section">
                <h3>Horários de Funcionamento</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Segunda a Sexta</span>
                    <span className="time">8h às 18h</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sábado</span>
                    <span className="time">8h às 12h</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Domingo</span>
                    <span className="time">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Envie sua mensagem</h2>
              <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Nossa Localização</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">
                <FaMap />
              </div>
              <p>
                Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi<br />
                São Paulo - SP, 04538-133
              </p>
              <a 
                href="https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima,+3477+Itaim+Bibi+São+Paulo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-card">
            <div className="emergency-icon">
              <FaExclamationTriangle />
            </div>
            <div className="emergency-content">
              <h3>Emergências Odontológicas</h3>
              <p>
                Para urgências fora do horário comercial, entre em contato pelo WhatsApp 
                ou deixe uma mensagem no formulário informando que é uma emergência.
              </p>
              <a 
                href="https://wa.me/555591679300?text=EMERGÊNCIA - Preciso de atendimento urgente" 
                className="btn btn-emergency"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Emergência
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Contact;