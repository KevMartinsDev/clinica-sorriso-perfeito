import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { validateName, validateEmail, validatePhone, validateDate, validateRequired } from '../../utils/validation';
import { formatPhone, formatMoney, capitalizeWords } from '../../utils/formatters';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import ServiceSelector from './ServiceSelector';
import DatePicker from './DatePicker';
import TimeSlots from './TimeSlots';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f1f3f4;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &::before {
    content: '';
    width: 6px;
    height: 24px;
    background: var(--primary-color);
    border-radius: 3px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$columns || '1fr 1fr'};
  }
`;

const SummaryCard = styled.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SummaryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(46, 139, 87, 0.1);
  
  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--primary-color);
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  
  svg {
    font-size: 4rem;
    color: var(--success-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-gray);
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto 2rem;
  }
`;

const professionalOptions = [
  { value: 'no-preference', label: 'Sem preferência' },
  { value: 'maria', label: 'Dra. Maria' },
  { value: 'joao', label: 'Dr. João' }
];

const insuranceOptions = [
  { value: 'none', label: 'Não possuo convênio' },
  { value: 'unimed', label: 'Unimed' },
  { value: 'bradesco', label: 'Bradesco Saúde' },
  { value: 'sulamerica', label: 'SulAmérica' }
];

const initialValues = {
  name: '',
  email: '',
  phone: '',
  birthDate: '',
  service: '',
  serviceName: '',
  servicePrice: 0,
  date: '',
  time: '',
  professional: 'no-preference',
  isReturningPatient: false,
  insurance: 'none',
  observations: ''
};

const validationRules = {
  name: validateName,
  email: validateEmail,
  phone: validatePhone,
  date: validateDate,
  time: (value) => validateRequired(value, 'Horário'),
  service: (value) => validateRequired(value, 'Tipo de consulta')
};

const AppointmentForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { sendAppointment } = useWhatsApp();
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue
  } = useForm(initialValues, validationRules);

  const handlePhoneChange = (value) => {
    const formatted = formatPhone(value);
    setValue('phone', formatted);
  };

  const handleServiceChange = (serviceId, serviceName, servicePrice) => {
    setValue('service', serviceId);
    setValue('serviceName', serviceName);
    setValue('servicePrice', servicePrice);
  };

  const handleFormSubmit = async (formData) => {
    setTimeout(() => {
      sendAppointment(formData);
      setShowSuccess(true);
      localStorage.removeItem('appointmentForm');
    }, 2000);
  };

  const handleNewAppointment = () => {
    setShowSuccess(false);
    window.location.reload();
  };

  if (showSuccess) {
    return (
      <FormContainer>
        <SuccessMessage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaCheckCircle />
          <h3>Agendamento Enviado!</h3>
          <p>
            Sua solicitação de agendamento foi enviada via WhatsApp. 
            Em breve entraremos em contato para confirmar a consulta.
          </p>
          <Button variant="primary" onClick={handleNewAppointment}>
            Novo Agendamento
          </Button>
        </SuccessMessage>
      </FormContainer>
    );
  }

  const canShowSummary = values.serviceName && values.date && values.time;

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormSection>
          <SectionTitle>1. Dados Pessoais</SectionTitle>
          <FormGrid>
            <Input
              label="Nome completo"
              value={values.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name ? errors.name : ''}
              placeholder="Digite seu nome completo"
              required
            />
            <Input
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email ? errors.email : ''}
              placeholder="seu@email.com"
              required
            />
            <Input
              label="Telefone/WhatsApp"
              value={values.phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur('phone')}
              error={touched.phone ? errors.phone : ''}
              placeholder="(11) 99999-9999"
              required
            />
            <Input
              label="Data de nascimento"
              type="date"
              value={values.birthDate}
              onChange={handleChange('birthDate')}
              placeholder="Opcional"
            />
          </FormGrid>
        </FormSection>

        <FormSection>
          <SectionTitle>2. Tipo de Consulta</SectionTitle>
          <ServiceSelector
            selectedService={values.service}
            onServiceChange={handleServiceChange}
            error={touched.service ? errors.service : ''}
          />
        </FormSection>

        <FormSection>
          <SectionTitle>3. Data e Horário</SectionTitle>
          <FormGrid $columns="1fr">
            <DatePicker
              value={values.date}
              onChange={handleChange('date')}
              onBlur={handleBlur('date')}
              error={touched.date ? errors.date : ''}
            />
            <TimeSlots
              selectedDate={values.date}
              selectedTime={values.time}
              onTimeSelect={handleChange('time')}
              error={touched.time ? errors.time : ''}
            />
          </FormGrid>
        </FormSection>

        <FormSection>
          <SectionTitle>4. Preferências</SectionTitle>
          <FormGrid>
            <Select
              label="Profissional preferido"
              options={professionalOptions}
              value={values.professional}
              onChange={handleChange('professional')}
            />
            <div>
              <label style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>
                Já é nosso paciente?
              </label>
              <FormGrid style={{ marginTop: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal' }}>
                  <input
                    type="radio"
                    name="isReturningPatient"
                    checked={values.isReturningPatient === true}
                    onChange={() => setValue('isReturningPatient', true)}
                  />
                  Sim
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'normal' }}>
                  <input
                    type="radio"
                    name="isReturningPatient"
                    checked={values.isReturningPatient === false}
                    onChange={() => setValue('isReturningPatient', false)}
                  />
                  Não
                </label>
              </FormGrid>
            </div>
          </FormGrid>
          
          <div style={{ marginTop: '1.5rem' }}>
            <Select
              label="Convênio"
              options={insuranceOptions}
              value={values.insurance}
              onChange={handleChange('insurance')}
            />
          </div>
        </FormSection>

        <FormSection>
          <SectionTitle>5. Observações</SectionTitle>
          <Textarea
            label="Informações adicionais"
            value={values.observations}
            onChange={handleChange('observations')}
            placeholder="Descreva sintomas, alergias ou outras informações importantes..."
            rows={4}
          />
        </FormSection>

        {canShowSummary && (
          <SummaryCard>
            <SummaryTitle>📋 Resumo do Agendamento</SummaryTitle>
            <SummaryItem>
              <span>Paciente:</span>
              <span>{capitalizeWords(values.name)}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Tipo de consulta:</span>
              <span>{values.serviceName}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Data e horário:</span>
              <span>{new Date(values.date).toLocaleDateString('pt-BR')} às {values.time}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Profissional:</span>
              <span>{professionalOptions.find(opt => opt.value === values.professional)?.label}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Valor da consulta:</span>
              <span>{formatMoney(values.servicePrice)}</span>
            </SummaryItem>
          </SummaryCard>
        )}

        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isSubmitting}
          style={{ width: '100%' }}
        >
          {isSubmitting ? (
            <>
              <FaSpinner style={{ animation: 'spin 1s linear infinite', marginRight: '0.5rem' }} />
              Enviando agendamento...
            </>
          ) : (
            'Agendar Consulta via WhatsApp'
          )}
        </Button>
      </form>
    </FormContainer>
  );
};

export default AppointmentForm;