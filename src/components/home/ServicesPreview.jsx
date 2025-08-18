import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import { servicesData } from '../../data/services';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(Card)`
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$color};
  }
`;

const ServiceIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.$color};
    color: white;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  color: var(--text-gray);
  
  li {
    padding: 0.25rem 0;
    
    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const ViewAllButton = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

const ViewAllLink = styled.button`
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ServicesPreview = () => {
  const navigate = useNavigate();

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

  const handleServiceClick = (serviceId) => {
    navigate(`/servicos#${serviceId}`);
  };

  const handleViewAllClick = () => {
    navigate('/servicos');
  };

  return (
    <ServicesSection>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              
              return (
                <ServiceCard
                  key={service.id}
                  $color={service.color}
                  variant="elevated"
                  clickable
                  onClick={() => handleServiceClick(service.id)}
                  variants={itemVariants}
                  data-testid={`service-card-${service.id}`}
                >
                  <ServiceIcon $color={service.color}>
                    <IconComponent />
                  </ServiceIcon>
                  
                  <ServiceTitle>{service.title}</ServiceTitle>
                  
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                  
                  <ServicePrice data-testid={`service-price-${service.id}`}>
                    {service.price}
                  </ServicePrice>
                  
                  <ServiceFeatures>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              );
            })}
          </ServicesGrid>
        </motion.div>

        <ViewAllButton
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ViewAllLink onClick={handleViewAllClick}>
            Ver todos os serviços
          </ViewAllLink>
        </ViewAllButton>
      </Container>
    </ServicesSection>
  );
};

export default ServicesPreview;