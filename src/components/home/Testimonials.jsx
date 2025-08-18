import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Card from '../common/Card';
import { testimonialsData } from '../../data/testimonials';

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled(Card)`
  position: relative;
  text-align: left;
  height: 100%;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -10px;
  left: 1.5rem;
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin: 1.5rem 0 2rem 0;
  font-style: italic;
  position: relative;
`;

const PatientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const PatientAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #45a049);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
`;

const PatientDetails = styled.div`
  flex: 1;
`;

const PatientName = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
`;

const PatientMeta = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-gray);
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const StarIcon = styled(FaStar)`
  color: #ffd700;
  font-size: 1rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 500;
`;

const Testimonials = () => {
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

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} data-testid={`star-${index}`} />
    ));
  };

  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '5.000+', label: 'Pacientes Atendidos' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '24h', label: 'Atendimento Emergencial' }
  ];

  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            O que nossos pacientes dizem
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Depoimentos reais de pessoas que transformaram seus sorrisos conosco
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialsGrid>
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                variant="elevated"
                fullHeight
                variants={itemVariants}
                data-testid={`testimonial-${testimonial.id}`}
              >
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                
                <TestimonialText data-testid={`testimonial-text-${testimonial.id}`}>
                  "{testimonial.text}"
                </TestimonialText>
                
                <PatientInfo>
                  <PatientAvatar>
                    {getInitials(testimonial.name)}
                  </PatientAvatar>
                  
                  <PatientDetails>
                    <PatientName data-testid={`patient-name-${testimonial.id}`}>
                      {testimonial.name}
                    </PatientName>
                    <PatientMeta>
                      {testimonial.age && `${testimonial.age} anos`}
                      {testimonial.subtitle && testimonial.subtitle}
                    </PatientMeta>
                    
                    <RatingContainer data-testid={`rating-${testimonial.id}`}>
                      {renderStars(testimonial.rating)}
                    </RatingContainer>
                  </PatientDetails>
                </PatientInfo>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </motion.div>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;