import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck, FaCalendarAlt } from 'react-icons/fa';
import Button from '../common/Button';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: 70vh;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    text-align: center;
  }
`;

const HeroContent = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BenefitsList = styled(motion.ul)`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-dark);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
    padding: 0.25rem;
    border-radius: 50%;
    min-width: 1.5rem;
    height: 1.5rem;
  }
`;

const CTAContainer = styled(motion.div)`
  margin-top: 2.5rem;
`;

const HeroImage = styled(motion.div)`
  background: url('https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop') center/cover;
  min-height: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    min-height: 300px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05));
    border-radius: 20px;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    min-width: auto;
  }
`;

const CardTitle = styled.h4`
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

const CardText = styled.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
`;

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
    <HeroSection>
      <Container>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={itemVariants}>
            Transformamos sorrisos há mais de 10 anos
          </HeroTitle>
          
          <HeroSubtitle variants={itemVariants}>
            Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo.
          </HeroSubtitle>
          
          <BenefitsList variants={itemVariants}>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                variants={itemVariants}
              >
                <FaCheck />
                {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>
          
          <CTAContainer variants={itemVariants}>
            <Button 
              size="large"
              onClick={handleCTAClick}
              data-testid="cta-button"
            >
              <FaCalendarAlt />
              Agende sua consulta
            </Button>
          </CTAContainer>
        </HeroContent>
        
        <HeroImage
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <FloatingCard
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
          >
            <CardTitle>Atendimento 24h</CardTitle>
            <CardText>Emergências atendidas a qualquer hora</CardText>
          </FloatingCard>
        </HeroImage>
      </Container>
    </HeroSection>
  );
};

export default Hero;