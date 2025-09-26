import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock, FaRoute } from 'react-icons/fa';
import {
  ContactSection,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ContactGrid,
  ContactCard,
  CardContent,
  CardAction,
  ContactIcon,
  ContactTitle,
  ContactText,
  ContactAction,
  ScheduleList,
  DayLabel,
  TimeLabel,
  EmergencyBanner,
  EmergencyTitle,
  EmergencyText,
  EmergencyButton
} from './ContactInfo.styles';

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
    window.open(`https://wa.me/555591679300?text=${message}`, '_blank');
  };

  const handleEmergencyClick = () => {
    const message = encodeURIComponent('Olá! Preciso de atendimento de emergência.');
    window.open(`https://wa.me/555591679300?text=${message}`, '_blank');
  };

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=Av.+Brigadeiro+Faria+Lima+3477+Itaim+Bibi+São+Paulo', '_blank');
  };

  const schedule = [
    { day: 'Segunda à Sexta', time: '8h às 18h' },
    { day: 'Sábado', time: '8h às 14h' },
    { day: 'Domingo', time: 'Fechado' },
    { day: 'Emergências', time: '24h' }
  ];

  return (
    <ContactSection role="region" aria-labelledby="contact-title">
      <Container>
        <SectionHeader>
          <SectionTitle
            id="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            as="h2"
          >
            Como nos encontrar
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            as="p"
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
              <CardContent>
                <div>
                  <ContactIcon $color="#2E8B57">
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactTitle>Localização</ContactTitle>
                  <ContactText>
                    Av. Brig. Faria Lima, 3477<br />
                    Itaim Bibi, São Paulo - SP<br />
                    CEP: 04538-133
                  </ContactText>
                </div>
                <CardAction>
                  <ContactAction
                    $color="#2E8B57"
                    onClick={handleDirectionsClick}
                    href="#"
                  >
                    <FaRoute />
                    Como chegar
                  </ContactAction>
                </CardAction>
              </CardContent>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <CardContent>
                <div>
                  <ContactIcon $color="#4169E1">
                    <FaPhone />
                  </ContactIcon>
                  <ContactTitle>Telefone</ContactTitle>
                  <ContactText>
                    Central de Atendimento<br />
                    (55) 99 9167-9300<br />
                    Atendimento comercial
                  </ContactText>
                </div>
                <CardAction>
                  <ContactAction
                    $color="#4169E1"
                    href="tel:+555591679300"
                  >
                    <FaPhone />
                    Ligar agora
                  </ContactAction>
                </CardAction>
              </CardContent>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <CardContent>
                <div>
                  <ContactIcon $color="#25D366">
                    <FaWhatsapp />
                  </ContactIcon>
                  <ContactTitle>WhatsApp</ContactTitle>
                  <ContactText>
                    Agendamentos e dúvidas<br />
                    (55) 99 9167-9300<br />
                    Resposta rápida
                  </ContactText>
                </div>
                <CardAction>
                  <ContactAction
                    $color="#25D366"
                    onClick={handleWhatsAppClick}
                    href="#"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </ContactAction>
                </CardAction>
              </CardContent>
            </ContactCard>

            <ContactCard variants={itemVariants} variant="elevated">
              <CardContent>
                <div>
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
                </div>
              </CardContent>
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