import styled from 'styled-components';
import { servicesData } from '../../../data/services';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const ServiceCard = styled.div`
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? 'var(--primary-light)' : 'white'};

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const ServiceTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: var(--text-dark);
  font-size: 1.1rem;
`;

const ServiceDescription = styled.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ServicePrice = styled.div`
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ServiceSelector = ({ selectedService, onServiceChange, error }) => {
  const handleServiceSelect = (service) => {
    onServiceChange(service.id, service.name, service.price);
  };

  return (
    <Container>
      <ServiceGrid>
        {servicesData.map(service => (
          <ServiceCard
            key={service.id}
            selected={selectedService === service.id}
            onClick={() => handleServiceSelect(service)}
          >
            <ServiceTitle>{service.name}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>
              A partir de R$ {service.price.toLocaleString('pt-BR')}
            </ServicePrice>
          </ServiceCard>
        ))}
      </ServiceGrid>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ServiceSelector;