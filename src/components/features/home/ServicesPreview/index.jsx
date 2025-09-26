import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../../../../data/services';
import {
  ServicesSection,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServicePrice,
  ServiceFeatures,
  ViewAllButton,
  ViewAllLink
} from './ServicesPreview.styles';

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
    <ServicesSection role="region" aria-labelledby="services-title">
      <Container>
        <SectionHeader>
          <SectionTitle
            id="services-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            as="h2"
          >
            Nossos Serviços
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            as="p"
          >
            Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="grid"
          aria-label="Lista de serviços odontológicos"
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceClick(service.id);
                    }
                  }}
                  variants={itemVariants}
                  data-testid={`service-card-${service.id}`}
                  role="gridcell"
                  tabIndex={0}
                  aria-label={`${service.title} - ${service.price} - Clique para ver mais detalhes`}
                >
                  <ServiceIcon $color={service.color} aria-hidden="true">
                    <IconComponent />
                  </ServiceIcon>

                  <ServiceTitle as="h3">{service.title}</ServiceTitle>

                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>

                  <ServicePrice
                    data-testid={`service-price-${service.id}`}
                    aria-label={`Preço: ${service.price}`}
                  >
                    {service.price}
                  </ServicePrice>

                  <ServiceFeatures role="list" aria-label="Características do serviço">
                    {service.features.map((feature, index) => (
                      <li key={index} role="listitem">{feature}</li>
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
          <ViewAllLink
            onClick={handleViewAllClick}
            aria-label="Ver página completa de todos os serviços"
            type="button"
          >
            Ver todos os serviços
          </ViewAllLink>
        </ViewAllButton>
      </Container>
    </ServicesSection>
  );
};

export default ServicesPreview;