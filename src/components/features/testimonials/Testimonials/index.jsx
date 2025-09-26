import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../../../../data/testimonials';
import {
  TestimonialsSection,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  TestimonialText,
  PatientInfo,
  PatientAvatar,
  PatientDetails,
  PatientName,
  PatientMeta,
  RatingContainer,
  StarIcon,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel
} from './Testimonials.styles';

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
      <StarIcon
        key={index}
        data-testid={`star-${index}`}
        aria-label="Avaliação 5 estrelas"
      />
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
                  &ldquo;{testimonial.text}&rdquo;
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