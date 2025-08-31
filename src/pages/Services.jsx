import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/common/Layout';
import Modal from '../components/common/Modal';
import { servicesDetailed, additionalInfo } from '../data/services-detailed';
import { FaCreditCard, FaHospital, FaFileInvoice, FaCalendarAlt } from 'react-icons/fa';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service, category) => {
    setSelectedService(service);
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setSelectedCategory('');
  };

  return (
    <Layout>
      <div className="services-page">
      <div className="hero-section hero-services">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nossos Serviços
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tratamentos completos com a mais alta qualidade e tecnologia de ponta
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          {Object.entries(servicesDetailed).map(([key, category], categoryIndex) => (
            <motion.div 
              key={key} 
              className="service-category"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.6 }}
            >
              <motion.h2 
                className="category-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.8 }}
              >
                {category.title}
              </motion.h2>
              <div className="services-grid">
                {category.services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="service-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + index * 0.1 + 1 
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="service-info">
                      <h3 className="service-name">{service.name}</h3>
                    </div>
                    <span className="service-price">{service.price}</span>
                    <motion.button 
                      className="btn btn-outline btn-small"
                      onClick={() => handleServiceClick(service, category.title)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Saiba mais
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="payment-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="container">
          <motion.div 
            className="payment-info-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            {[
              { icon: FaCreditCard, title: 'Parcelamento', content: additionalInfo.financing },
              { 
                icon: FaHospital, 
                title: 'Convênios', 
                content: additionalInfo.insurance.map((insurance, index) => (
                  <span key={index} className="insurance-item">{insurance}</span>
                ))
              },
              { icon: FaFileInvoice, title: 'Orçamento', content: additionalInfo.customQuote },
              { icon: FaCalendarAlt, title: 'Preços válidos', content: `Até ${additionalInfo.validUntil}` }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 2.4 + index * 0.1 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="info-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 2.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <item.icon />
                </motion.div>
                <h3>{item.title}</h3>
                {item.title === 'Convênios' ? (
                  <div className="insurance-list">{item.content}</div>
                ) : (
                  <p>{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="services-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
            >
              Interessado em algum tratamento?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado.
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
            >
              <motion.a 
                href="/contato" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta
              </motion.a>
              <motion.a 
                href="https://wa.me/555591679300?text=Olá! Gostaria de saber mais sobre os serviços da clínica." 
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="testimonials-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.2 }}
          >
            O que nossos pacientes dizem
          </motion.h2>
          <motion.div 
            className="testimonials-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.4 }}
          >
            {[
              {
                stars: "★★★★★",
                text: "Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito.",
                author: "- Maria Silva"
              },
              {
                stars: "★★★★★",
                text: "Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas.",
                author: "- João Santos"
              },
              {
                stars: "★★★★★",
                text: "Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!",
                author: "- Ana Costa"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 4.6 + index * 0.2 
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="testimonial-stars"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 4.8 + index * 0.2,
                    type: "spring"
                  }}
                >
                  {testimonial.stars}
                </motion.div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">{testimonial.author}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
        category={selectedCategory}
      />
    </Layout>
  );
};

export default Services;