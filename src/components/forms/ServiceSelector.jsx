import React from 'react';
import styled from 'styled-components';
import { FaStethoscope, FaSmile, FaTooth, FaAmbulance, FaRedo, FaUserMd } from 'react-icons/fa';
import { formatMoney } from '../../utils/formatters';

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ServiceCard = styled.div`
  border: 2px solid ${props => props.$selected ? 'var(--primary-color)' : '#e1e5e9'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$selected ? 'var(--primary-color-light)' : 'white'};
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.$selected ? 'var(--primary-color)' : '#6c757d'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$selected ? 'rgba(46, 139, 87, 0.1)' : '#f8f9fa'};
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
`;

const ServicePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-gray);
  line-height: 1.4;
  margin: 0;
`;

const services = [
  {
    id: 'consulta-geral',
    name: 'Consulta Geral',
    price: 120,
    description: 'Avaliação completa da saúde bucal e diagnóstico',
    icon: <FaStethoscope />
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    price: 100,
    description: 'Consulta ortodôntica e avaliação para aparelho',
    icon: <FaUserMd />
  },
  {
    id: 'estetica-dental',
    name: 'Estética Dental',
    price: 150,
    description: 'Clareamento, facetas e harmonização do sorriso',
    icon: <FaSmile />
  },
  {
    id: 'implantes',
    name: 'Implantes',
    price: 150,
    description: 'Avaliação para implantes dentários',
    icon: <FaTooth />
  },
  {
    id: 'emergencia',
    name: 'Emergência',
    price: 200,
    description: 'Atendimento urgente para dor e traumas',
    icon: <FaAmbulance />
  },
  {
    id: 'retorno',
    name: 'Retorno',
    price: 80,
    description: 'Consulta de retorno para acompanhamento',
    icon: <FaRedo />
  }
];

const ServiceSelector = ({ selectedService, onServiceChange, error }) => {
  return (
    <div>
      <ServiceGrid>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            $selected={selectedService === service.id}
            onClick={() => onServiceChange(service.id, service.name, service.price)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onServiceChange(service.id, service.name, service.price);
              }
            }}
          >
            <ServiceIcon $selected={selectedService === service.id}>
              {service.icon}
            </ServiceIcon>
            <ServiceTitle>{service.name}</ServiceTitle>
            <ServicePrice>{formatMoney(service.price)}</ServicePrice>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
      {error && (
        <div style={{ color: 'var(--error-color)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;