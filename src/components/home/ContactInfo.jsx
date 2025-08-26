import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaRoute } from 'react-icons/fa';
import Card from '../common/Card';

const ContactSection = styled.section`
  padding: 5rem 0;
  background: var(--white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(Card)`
  text-align: center;
  position: relative;
`;

const ContactIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  ${ContactCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.$color};
    color: white;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$color};
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => `${props.$color}40`};
  }
`;

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const DayLabel = styled.span`
  font-weight: 500;
  color: var(--text-dark);
`;

const TimeLabel = styled.span`
  color: var(--text-gray);
`;

const EmergencyBanner = styled(motion.div)`
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const EmergencyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const EmergencyText = styled.p`
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const EmergencyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #ff4757;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/5599916793000?text=${message}`, '_blank');
  };

  const handleEmergencyClick = () => {
    const message = encodeURIComponent('Olá! Preciso de atendimento de emergência.');
    window.open(`https://wa.me/5599916793000?text=${message}`, '_blank');
  };

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo', '_blank');
  };

  const schedule = [
    { day: 'Segunda à Sexta', time: '8h às 18h' },
    { day: 'Sábado', time: '8h às 14h' },
    { day: 'Domingo', time: 'Fechado' },
    { day: 'Emergências', time: '24h' }
  ];

  return (
    <ContactSection>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Como nos encontrar
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Estamos sempre prontos para cuidar do seu sorriso
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactGrid>
            <ContactCard variants={itemVariants} variant="elevated">
              <ContactIcon $color="#2E8B57">
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactTitle>Localização</ContactTitle>
              <ContactText>
                Rua das Flores, 123<br />
                Vila Madalena, São Paulo - SP<br />
                CEP: 05435-000
              </ContactText>
              <ContactAction 
                $color="#2E8B57"
                onClick={handleDirectionsClick}
                href="#"
              >
                <FaRoute />
                Como chegar
              </ContactAction>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <ContactIcon $color="#4169E1">
                <FaPhone />
              </ContactIcon>
              <ContactTitle>Telefone</ContactTitle>
              <ContactText>
                Central de Atendimento<br />
                (55) 99 9167-9300<br />
                Atendimento comercial
              </ContactText>
              <ContactAction 
                $color="#4169E1"
                href="tel:+5599916793000"
              >
                <FaPhone />
                Ligar agora
              </ContactAction>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <ContactIcon $color="#25D366">
                <FaWhatsapp />
              </ContactIcon>
              <ContactTitle>WhatsApp</ContactTitle>
              <ContactText>
                Agendamentos e dúvidas<br />
                (55) 99 9167-9300<br />
                Resposta rápida
              </ContactText>
              <ContactAction 
                $color="#25D366"
                onClick={handleWhatsAppClick}
                href="#"
              >
                <FaWhatsapp />
                Chamar no WhatsApp
              </ContactAction>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <ContactIcon $color="#FF6B35">
                <FaClock />
              </ContactIcon>
              <ContactTitle>Horários</ContactTitle>
              <ScheduleList>
                {schedule.map((item, index) => (
                  <li key={index}>
                    <DayLabel>{item.day}</DayLabel>
                    <TimeLabel>{item.time}</TimeLabel>
                  </li>
                ))}
              </ScheduleList>
            </ContactCard>
          </ContactGrid>
        </motion.div>

        <EmergencyBanner
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <EmergencyTitle>Emergência Dental?</EmergencyTitle>
          <EmergencyText>
            Atendemos emergências 24 horas por dia, 7 dias por semana
          </EmergencyText>
          <EmergencyButton onClick={handleEmergencyClick} href="#">
            <FaWhatsapp />
            Emergência WhatsApp
          </EmergencyButton>
        </EmergencyBanner>
      </Container>
    </ContactSection>
  );
};

export default ContactInfo;