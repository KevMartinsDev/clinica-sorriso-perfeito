import { FaCheck, FaCalendarAlt } from 'react-icons/fa';
import Button from '../../../ui/Button';
import OptimizedImage from '../../../ui/OptimizedImage';
import {
  HeroSection,
  Container,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  BenefitsList,
  BenefitItem,
  CTAContainer,
  HeroImage,
  FloatingCard,
  CardTitle,
  CardText
} from './Hero.styles';

const Hero = () => {
  const benefits = [
    'Tratamentos sem dor',
    'Tecnologia de ponta',
    'Ambiente acolhedor',
    'Agendamento online 24h'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.6 }
    }
  };

  const handleCTAClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/555591679300?text=${message}`, '_blank');
  };

  return (
    <HeroSection role="banner" aria-labelledby="hero-title">
      <Container>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle
            id="hero-title"
            variants={itemVariants}
            as="h1"
          >
            Transformamos sorrisos há mais de 10 anos
          </HeroTitle>

          <HeroSubtitle
            variants={itemVariants}
            as="p"
            aria-describedby="hero-title"
          >
            Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo.
          </HeroSubtitle>

          <BenefitsList
            variants={itemVariants}
            role="list"
            aria-label="Nossos diferenciais"
          >
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                variants={itemVariants}
                role="listitem"
              >
                <FaCheck aria-hidden="true" />
                <span>{benefit}</span>
              </BenefitItem>
            ))}
          </BenefitsList>

          <CTAContainer variants={itemVariants}>
            <Button
              size="large"
              onClick={handleCTAClick}
              data-testid="cta-button"
              aria-label="Agendar consulta pelo WhatsApp"
              type="button"
            >
              <FaCalendarAlt aria-hidden="true" />
              Agende sua consulta
            </Button>
          </CTAContainer>
        </HeroContent>

        <HeroImage
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          role="img"
          aria-label="Ambiente da clínica odontológica"
        >
          <OptimizedImage
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
            alt="Consultório odontológico moderno e acolhedor da Clínica Sorriso Perfeito"
            aspectRatio="4/3"
            objectFit="cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '20px'
            }}
          />
          <FloatingCard
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            role="complementary"
            aria-labelledby="emergency-title"
          >
            <CardTitle id="emergency-title">Atendimento 24h</CardTitle>
            <CardText>Emergências atendidas a qualquer hora</CardText>
          </FloatingCard>
        </HeroImage>
      </Container>
    </HeroSection>
  );
};

export default Hero;