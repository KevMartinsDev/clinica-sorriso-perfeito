import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserMd, FaWhatsapp } from 'react-icons/fa';
import Layout from '../../components/layout/Layout';
import AppointmentForm from '../../components/forms/AppointmentForm';
import { AgendamentoContainer } from './Agendamento.styles';

const Agendamento = () => {
  return (
    <Layout>
      <AgendamentoContainer>
        <header className="hero-section" role="banner">
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
                Agende sua Consulta Online
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                aria-describedby="hero-title"
              >
                Sistema rápido e prático para agendar sua consulta odontológica.
                Escolha o horário ideal e receba confirmação imediata via WhatsApp.
              </motion.p>

              <motion.div
                className="features-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                role="list"
                aria-label="Benefícios do agendamento online"
              >
                <motion.div
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                  tabIndex={0}
                  aria-label="Agendamento imediato com horários em tempo real"
                >
                  <FaCalendarAlt className="feature-icon" aria-hidden="true" />
                  <h3 className="feature-title">Agendamento Imediato</h3>
                  <p className="feature-description">Veja horários disponíveis em tempo real</p>
                </motion.div>
                <motion.div
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                  tabIndex={0}
                  aria-label="Horários flexíveis disponíveis"
                >
                  <FaClock className="feature-icon" aria-hidden="true" />
                  <h3 className="feature-title">Horários Flexíveis</h3>
                  <p className="feature-description">Manhã, tarde e sábado disponíveis</p>
                </motion.div>
                <motion.div
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                  tabIndex={0}
                  aria-label="Escolha seu profissional preferido"
                >
                  <FaUserMd className="feature-icon" aria-hidden="true" />
                  <h3 className="feature-title">Escolha o Profissional</h3>
                  <p className="feature-description">Dra. Maria, Dr. João ou sem preferência</p>
                </motion.div>
                <motion.div
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="listitem"
                  tabIndex={0}
                  aria-label="Confirmação via WhatsApp"
                >
                  <FaWhatsapp className="feature-icon" aria-hidden="true" />
                  <h3 className="feature-title">Confirmação via WhatsApp</h3>
                  <p className="feature-description">Receba todos os detalhes no seu celular</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <section className="form-section" role="main" aria-labelledby="form-main-title">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 id="form-main-title" className="section-title">
                Complete os Dados
              </h2>
              <p className="section-description" aria-describedby="form-main-title">
                Preencha o formulário abaixo com suas informações e preferências.
                Após o envio, entraremos em contato via WhatsApp para confirmar sua consulta.
              </p>
            </motion.div>

            <motion.div
              className="info-cards"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              role="grid"
              aria-label="Informações sobre horários e profissionais"
            >
              <motion.article
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
                role="gridcell"
                aria-labelledby="schedule-title"
              >
                <h3 id="schedule-title" className="info-card-title">
                  <FaClock className="info-icon" aria-hidden="true" />
                  Horários de Atendimento
                </h3>
                <ul className="info-list" role="list" aria-label="Horários de funcionamento">
                  <li>Segunda a Sexta: 8h às 12h e 14h às 18h</li>
                  <li>Sábado: 8h às 12h</li>
                  <li>Domingo: Fechado</li>
                  <li>Emergências: Consulte disponibilidade</li>
                </ul>
              </motion.article>

              <motion.article
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
                role="gridcell"
                aria-labelledby="professionals-title"
              >
                <h3 id="professionals-title" className="info-card-title">
                  <FaUserMd className="info-icon" aria-hidden="true" />
                  Nossos Profissionais
                </h3>
                <ul className="info-list" role="list" aria-label="Lista de profissionais disponíveis">
                  <li>Dra. Maria - Ortodontia e Implantodontia</li>
                  <li>Dr. João - Endodontia e Estética</li>
                  <li>Equipe especializada e atualizada</li>
                  <li>Atendimento humanizado</li>
                </ul>
              </motion.article>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <AppointmentForm />
            </motion.div>
          </div>
        </section>
      </AgendamentoContainer>
    </Layout>
  );
};

export default Agendamento;