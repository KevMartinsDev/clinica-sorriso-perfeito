import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTooth, FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-color);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;

  svg {
    margin-top: 0.2rem;
    color: var(--accent-color);
    flex-shrink: 0;
  }
`;

const ContactLink = styled.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CombinedSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuickLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/agendamento', label: 'Agendamento' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <FaTooth />
            Sorriso Perfeito
          </Logo>
          <p>
            Cuidando do seu sorriso com excelência, tecnologia e carinho. 
            Sua saúde bucal é nossa prioridade.
          </p>
          <SocialLinks>
            <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <ContactItem>
            <FaMapMarkerAlt />
            <div>
              Av. Brigadeiro Faria Lima, 3477<br />
              Itaim Bibi, São Paulo - SP<br />
              CEP: 04538-133
            </div>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <ContactLink href="tel:+555591679300">
              (55) 55 9167-9300
            </ContactLink>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <CombinedSection>
            <SubSection>
              <SectionTitle>Horários</SectionTitle>
              <ContactItem>
                <FaClock />
                <div>
                  <strong>Segunda à Sexta:</strong><br />
                  08:00 - 18:00<br /><br />
                  <strong>Sábado:</strong><br />
                  08:00 - 12:00<br /><br />
                  <strong>Domingo:</strong><br />
                  Fechado
                </div>
              </ContactItem>
            </SubSection>

            <SubSection>
              <SectionTitle>Links Rápidos</SectionTitle>
              <QuickLinks>
                {quickLinks.map((link) => (
                  <QuickLink key={link.path} to={link.path}>
                    {link.label}
                  </QuickLink>
                ))}
              </QuickLinks>
            </SubSection>
          </CombinedSection>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>
          © {currentYear} Clínica Sorriso Perfeito. Todos os direitos reservados.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;