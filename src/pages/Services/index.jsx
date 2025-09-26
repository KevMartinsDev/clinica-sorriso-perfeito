import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/ui/Modal';
import { servicesDetailed, additionalInfo } from '../../data/services-detailed';
import { FaCreditCard, FaHospital, FaFileInvoice, FaCalendarAlt, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { ServicesContainer } from './Services.styles';

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
      <ServicesContainer>
        <header className="hero-section hero-services" role="banner">
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
                aria-describedby="hero-title"
              >
              Tratamentos completos com a mais alta qualidade e tecnologia de ponta
              </motion.p>
            </motion.div>
          </div>
        </header>

        <section className="services-section" role="main" aria-labelledby="services-main-title">
          <div className="container">
            <h2 id="services-main-title" className="visually-hidden">
              Catálogo completo de serviços odontológicos
            </h2>
            {Object.entries(servicesDetailed).map(([key, category], categoryIndex) => (
              <motion.section
                key={key}
                className="service-category"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.6 }}
                role="region"
                aria-labelledby={`category-${key}-title`}
              >
                <motion.h2
                  id={`category-${key}-title`}
                  className="category-title"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.8 }}
                >
                  {category.title}
                </motion.h2>
                <div className="services-grid" role="grid" aria-label={`Serviços de ${category.title}`}>
                  {category.services.map((service, index) => (
                    <motion.article
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
                      role="gridcell"
                      aria-labelledby={`service-${categoryIndex}-${index}-name`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleServiceClick(service, category.title);
                        }
                      }}
                    >
                      <div className="service-info">
                        <h3 id={`service-${categoryIndex}-${index}-name`} className="service-name">
                          {service.name}
                        </h3>
                      </div>
                      <span className="service-price" aria-label={`Preço: ${service.price}`}>
                        {service.price}
                      </span>
                      <motion.button
                        className="btn btn-outline btn-small"
                        onClick={() => handleServiceClick(service, category.title)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Saiba mais sobre ${service.name}`}
                        type="button"
                      >
                      Saiba mais
                      </motion.button>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        <motion.section
          className="payment-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          role="region"
          aria-labelledby="payment-info-title"
        >
          <div className="container">
            <motion.h2
              id="payment-info-title"
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              Formas de Pagamento e Convênios
            </motion.h2>
            <motion.div
              className="payment-info-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              role="grid"
              aria-label="Opções de pagamento e informações comerciais"
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
                <motion.article
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
                  role="gridcell"
                  aria-labelledby={`payment-info-${index}-title`}
                >
                  <motion.div
                    className="info-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 2.6 + index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    aria-hidden="true"
                  >
                    <item.icon />
                  </motion.div>
                  <h3 id={`payment-info-${index}-title`}>{item.title}</h3>
                  {item.title === 'Convênios' ? (
                    <div className="insurance-list" role="list" aria-label="Lista de convênios aceitos">
                      {item.content}
                    </div>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="services-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          role="region"
          aria-labelledby="cta-title"
        >
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            >
              <motion.h2
                id="cta-title"
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
                aria-describedby="cta-title"
              >
              Entre em contato conosco para agendar uma consulta e receber um orçamento personalizado.
              </motion.p>
              <motion.nav
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.8 }}
                aria-label="Ações de contato"
              >
                <Link
                  to="/contato"
                  className="btn btn-primary"
                  aria-label="Ir para página de contato para agendar consulta"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  Agendar Consulta
                  </motion.span>
                </Link>
                <motion.a
                  href="https://wa.me/555591679300?text=Olá! Gostaria de saber mais sobre os serviços da clínica."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Entrar em contato pelo WhatsApp para mais informações"
                >
                WhatsApp
                </motion.a>
              </motion.nav>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="testimonials-preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
          role="region"
          aria-labelledby="testimonials-title"
        >
          <div className="container">
            <motion.h2
              id="testimonials-title"
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
              role="grid"
              aria-label="Depoimentos de pacientes"
            >
              {[
                {
                  text: 'Excelente atendimento! A Dra. Maria é muito atenciosa e o resultado do meu clareamento ficou perfeito.',
                  name: 'Maria Silva',
                  age: '32',
                  rating: 5
                },
                {
                  text: 'Profissionais muito qualificados. Fiz um implante com o Dr. João e superou minhas expectativas.',
                  name: 'João Santos',
                  age: '45',
                  rating: 5
                },
                {
                  text: 'Ambiente muito acolhedor e tecnologia de ponta. Recomendo para toda a família!',
                  name: 'Ana Costa',
                  age: '28',
                  rating: 5
                }
              ].map((testimonial, index) => {
                const getInitials = (name) => {
                  return name.split(' ').map(n => n[0]).join('').toUpperCase();
                };

                const renderStars = (rating) => {
                  return Array.from({ length: 5 }, (_, starIndex) => (
                    <FaStar key={starIndex} className="star-icon" />
                  ));
                };

                return (
                  <motion.article
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
                    role="gridcell"
                    aria-labelledby={`testimonial-${index}-author`}
                  >
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>

                    <p className="testimonial-text">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="patient-info">
                      <div className="patient-avatar">
                        {getInitials(testimonial.name)}
                      </div>

                      <div className="patient-details">
                        <h4 className="patient-name" id={`testimonial-${index}-author`}>
                          {testimonial.name}
                        </h4>
                        <p className="patient-meta">
                          {testimonial.age} anos
                        </p>

                        <div className="rating-container">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
      </ServicesContainer>

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