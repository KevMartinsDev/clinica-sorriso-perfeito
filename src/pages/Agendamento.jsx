import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserMd, FaWhatsapp } from 'react-icons/fa';
import Layout from '../components/common/Layout';
import AppointmentForm from '../components/forms/AppointmentForm';

const AgendamentoPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, #228B22 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: 50px 50px;
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  svg {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.4;
  }
`;

const FormSection = styled.section`
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const InfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-4px);
  }
`;

const InfoCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 0.5rem 0;
    color: var(--text-gray);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
    }
  }
`;

const Agendamento = () => {
  return (
    <Layout>
      <AgendamentoPage>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Agende sua Consulta Online
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sistema rápido e prático para agendar sua consulta odontológica. 
            Escolha o horário ideal e receba confirmação imediata via WhatsApp.
          </HeroSubtitle>

          <FeaturesGrid
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeatureCard>
              <FaCalendarAlt />
              <h3>Agendamento Imediato</h3>
              <p>Veja horários disponíveis em tempo real</p>
            </FeatureCard>
            <FeatureCard>
              <FaClock />
              <h3>Horários Flexíveis</h3>
              <p>Manhã, tarde e sábado disponíveis</p>
            </FeatureCard>
            <FeatureCard>
              <FaUserMd />
              <h3>Escolha o Profissional</h3>
              <p>Dra. Maria, Dr. João ou sem preferência</p>
            </FeatureCard>
            <FeatureCard>
              <FaWhatsapp />
              <h3>Confirmação via WhatsApp</h3>
              <p>Receba todos os detalhes no seu celular</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </HeroSection>

      <FormSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Complete os Dados</SectionTitle>
            <SectionDescription>
              Preencha o formulário abaixo com suas informações e preferências. 
              Após o envio, entraremos em contato via WhatsApp para confirmar sua consulta.
            </SectionDescription>
          </SectionHeader>

          <InfoCards>
            <InfoCard>
              <InfoCardTitle>
                <FaClock />
                Horários de Atendimento
              </InfoCardTitle>
              <InfoList>
                <li>Segunda a Sexta: 8h às 12h e 14h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Domingo: Fechado</li>
                <li>Emergências: Consulte disponibilidade</li>
              </InfoList>
            </InfoCard>

            <InfoCard>
              <InfoCardTitle>
                <FaUserMd />
                Nossos Profissionais
              </InfoCardTitle>
              <InfoList>
                <li>Dra. Maria - Ortodontia e Implantodontia</li>
                <li>Dr. João - Endodontia e Estética</li>
                <li>Equipe especializada e atualizada</li>
                <li>Atendimento humanizado</li>
              </InfoList>
            </InfoCard>
          </InfoCards>

          <AppointmentForm />
        </Container>
      </FormSection>
      </AgendamentoPage>
    </Layout>
  );
};

export default Agendamento;