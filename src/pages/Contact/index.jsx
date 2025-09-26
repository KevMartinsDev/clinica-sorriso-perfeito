import { Helmet } from 'react-helmet-async';
import { Suspense, lazy, memo, useCallback, useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ErrorBoundary from '../../components/ui/ErrorBoundary';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaMap, FaExclamationTriangle, FaClock, FaEnvelopeOpen, FaPaperPlane } from 'react-icons/fa';
import {
  ContactContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContactContent,
  ContactGrid,
  ContactInfo,
  InfoCard,
  InfoIcon,
  InfoDetails,
  InfoTitle,
  InfoText,
  ContactFormSection,
  MapSection,
  SectionTitle,
  MapContainer,
  MapPlaceholder,
  EmergencySection,
  EmergencyCard,
  EmergencyIcon,
  EmergencyContent,
  EmergencyTitle,
  EmergencyText,
  EmergencyButton,
  HoursCard,
  HoursList,
  HoursItem,
  WhatsAppLink,
  BreadcrumbNav
} from './Contact.styles';

const ContactForm = lazy(() => import('../../components/forms/ContactForm'));

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contato - Clínica Sorriso Perfeito',
  'description': 'Entre em contato com a Clínica Sorriso Perfeito. Agende sua consulta odontológica e cuide do seu sorriso com nossos especialistas.',
  'url': 'https://clinica-sorriso-perfeito.com/contato',
  'mainEntity': {
    '@type': 'DentalClinic',
    'name': 'Clínica Sorriso Perfeito',
    'telephone': '+55-55-91679300',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Brig. Faria Lima, 3477',
      'addressLocality': 'Itaim Bibi',
      'addressRegion': 'SP',
      'postalCode': '04538-133',
      'addressCountry': 'BR'
    },
    'openingHours': [
      'Mo-Fr 08:00-18:00',
      'Sa 08:00-12:00'
    ],
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '-23.5505',
      'longitude': '-46.6333'
    }
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Clínica Sorriso Perfeito',
  'url': 'https://clinica-sorriso-perfeito.com',
  'logo': 'https://clinica-sorriso-perfeito.com/logo.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+55-55-91679300',
    'contactType': 'customer service',
    'availableLanguage': 'Portuguese'
  }
};

const Contact = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = useCallback((isEmergency = false) => {
    const message = isEmergency
      ? 'EMERGÊNCIA - Preciso de atendimento urgente'
      : 'Olá! Gostaria de agendar uma consulta.';

    const url = `https://wa.me/555591679300?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handlePhoneClick = useCallback(() => {
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: 'Contact Page Phone Click'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Contato | Clínica Sorriso Perfeito - Agende sua Consulta Odontológica</title>
        <meta
          name="description"
          content="Entre em contato com a Clínica Sorriso Perfeito. Agende sua consulta odontológica, tire suas dúvidas e cuide do seu sorriso com nossos especialistas em São Paulo."
        />
        <meta
          name="keywords"
          content="contato clínica odontológica, agendar consulta dentista, clínica dentária São Paulo, emergência odontológica, whatsapp dentista"
        />

        <meta property="og:title" content="Contato | Clínica Sorriso Perfeito - Agende sua Consulta" />
        <meta property="og:description" content="Entre em contato conosco e agende sua consulta odontológica. Atendimento especializado em São Paulo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinica-sorriso-perfeito.com/contato" />
        <meta property="og:image" content="https://clinica-sorriso-perfeito.com/images/contact-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato | Clínica Sorriso Perfeito" />
        <meta name="twitter:description" content="Entre em contato e agende sua consulta odontológica em São Paulo." />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Clínica Sorriso Perfeito" />
        <link rel="canonical" href="https://clinica-sorriso-perfeito.com/contato" />

        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </Helmet>

      <Layout>
        <ContactContainer role="main">

          <HeroSection>
            <HeroContent>
              <HeroTitle>Entre em Contato</HeroTitle>
              <HeroSubtitle>
                Estamos prontos para cuidar do seu sorriso. Fale conosco e agende sua consulta!
              </HeroSubtitle>
            </HeroContent>
          </HeroSection>

          <ContactContent>
            <ContactGrid>
              <ContactInfo>
                <InfoCard>
                  <InfoIcon aria-hidden="true" $color="#2E8B57">
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoDetails>
                    <InfoTitle>Endereço</InfoTitle>
                    <InfoText
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">Av. Brig. Faria Lima, 3477</span><br />
                      <span itemProp="addressLocality">Itaim Bibi</span>, <span itemProp="addressRegion">São Paulo - SP</span><br />
                      CEP: <span itemProp="postalCode">04538-133</span>
                    </InfoText>
                  </InfoDetails>
                </InfoCard>

                <InfoCard>
                  <InfoIcon aria-hidden="true" $color="#4169E1">
                    <FaPhone />
                  </InfoIcon>
                  <InfoDetails>
                    <InfoTitle>Telefone</InfoTitle>
                    <InfoText>
                      <a
                        href="tel:+555591679300"
                        onClick={handlePhoneClick}
                        aria-label="Ligar para (55) 55 9167-9300"
                      >
                        (55) 55 9167-9300
                      </a>
                    </InfoText>
                  </InfoDetails>
                </InfoCard>

                <InfoCard>
                  <InfoIcon aria-hidden="true" $color="#25D366">
                    <FaWhatsapp />
                  </InfoIcon>
                  <InfoDetails>
                    <InfoTitle>WhatsApp</InfoTitle>
                    <InfoText>
                      <WhatsAppLink
                        onClick={() => handleWhatsAppClick()}
                        aria-label="Conversar via WhatsApp"
                        role="button"
                        tabIndex="0"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleWhatsAppClick();
                          }
                        }}
                      >
                        (55) 55 9167-9300
                      </WhatsAppLink>
                    </InfoText>
                  </InfoDetails>
                </InfoCard>


                <InfoCard>
                  <InfoIcon aria-hidden="true" $color="#FF6B35">
                    <FaClock />
                  </InfoIcon>
                  <InfoDetails>
                    <InfoTitle>Horários de Funcionamento</InfoTitle>
                    <HoursList>
                      <HoursItem>
                        <span>Segunda a Sexta</span>
                        <span>8h às 18h</span>
                      </HoursItem>
                      <HoursItem>
                        <span>Sábado</span>
                        <span>8h às 12h</span>
                      </HoursItem>
                      <HoursItem>
                        <span>Domingo</span>
                        <span>Fechado</span>
                      </HoursItem>
                    </HoursList>
                  </InfoDetails>
                </InfoCard>
              </ContactInfo>

              <ContactFormSection>
                <div className="form-header">
                  <div className="form-icon">
                    <FaEnvelopeOpen />
                  </div>
                  <h2>Envie sua Mensagem</h2>
                  <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
                </div>

                <ErrorBoundary fallback={<div>Erro ao carregar formulário. Tente novamente mais tarde.</div>}>
                  <Suspense fallback={<LoadingSpinner />}>
                    <ContactForm />
                  </Suspense>
                </ErrorBoundary>
              </ContactFormSection>
            </ContactGrid>
          </ContactContent>

          <MapSection>
            <SectionTitle>Nossa Localização</SectionTitle>
            <MapContainer>
              <MapPlaceholder>
                <FaMap aria-hidden="true" />
                <p>
                  <strong>Av. Brig. Faria Lima, 3477</strong><br />
                  Itaim Bibi, São Paulo - SP<br />
                  CEP: 04538-133
                </p>
                <a
                  href="https://maps.google.com/?q=Av.+Brig.+Faria+Lima,+3477+Itaim+Bibi+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver localização no Google Maps"
                >
                  Ver no Google Maps
                </a>
              </MapPlaceholder>
            </MapContainer>
          </MapSection>

          <EmergencySection>
            <EmergencyCard role="alert">
              <EmergencyIcon aria-hidden="true">
                <FaExclamationTriangle />
              </EmergencyIcon>
              <EmergencyContent>
                <EmergencyTitle>Emergências Odontológicas</EmergencyTitle>
                <EmergencyText>
                  Para urgências fora do horário comercial, entre em contato pelo WhatsApp
                  ou deixe uma mensagem no formulário informando que é uma emergência.
                </EmergencyText>
                <EmergencyButton
                  onClick={() => handleWhatsAppClick(true)}
                  aria-label="WhatsApp para emergências odontológicas"
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleWhatsAppClick(true);
                    }
                  }}
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp Emergência
                </EmergencyButton>
              </EmergencyContent>
            </EmergencyCard>
          </EmergencySection>
        </ContactContainer>
      </Layout>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;