import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaSpinner,
  FaStethoscope,
  FaTooth,
  FaSmile,
  FaUserMd,
  FaAmbulance,
  FaRedoAlt
} from 'react-icons/fa';
import { useForm } from '../../../hooks/useForm';
import { useWhatsApp } from '../../../hooks/useWhatsApp';
import { validateName, validateEmail, validatePhone, validateDate, validateRequired } from '../../../utils/validation';
import { formatPhone, formatMoney, capitalizeWords } from '../../../utils/formatters';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import ServiceSelector from './ServiceSelector';
import DatePicker from './DatePicker';
import TimeSlots from './TimeSlots';
import {
  FormContainer,
  FormSection,
  SectionTitle,
  FormGrid,
  SummaryCard,
  SummaryTitle,
  SummaryItem,
  SuccessMessage,
  PatientTypeContainer,
  PatientTypeLabel,
  PatientTypeLabelMain,
  InsuranceContainer,
  PersonalDataSection,
  PersonalDataGrid,
  CustomInput,
  CustomLabel,
  HelpText,
  RequiredAsterisk,
  InputWrapper,
  CalendarIconWrapper,
  ServiceCardsGrid,
  ServiceCard,
  ServiceIconWrapper,
  ServiceName,
  ServicePrice,
  ServiceDescription,
  SelectedIndicator,
  PreferencesSection,
  PreferencesGrid,
  CustomSelectWrapper,
  CustomSelectLabel,
  CustomSelect,
  RadioGroupWrapper,
  RadioGroupLabel,
  RadioOptionsContainer,
  RadioOption,
  ObservationsSection,
  ObservationsWrapper,
  ObservationsLabel,
  CustomTextarea,
  CharacterCount,
  ObservationsHelpText
} from './AppointmentForm.styles';

const professionalOptions = [
  { value: 'no-preference', label: 'Sem preferência' },
  { value: 'maria', label: 'Dra. Maria' },
  { value: 'joao', label: 'Dr. João' }
];

const serviceOptions = [
  {
    id: 'consulta-geral',
    name: 'Consulta Geral',
    price: 'R$ 120,00',
    description: 'Avaliação completa da saúde bucal e diagnóstico preventivo',
    icon: FaStethoscope
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    price: 'R$ 180,00',
    description: 'Correção de posicionamento dental e mordida',
    icon: FaTooth
  },
  {
    id: 'estetica-geral',
    name: 'Estética Geral',
    price: 'R$ 250,00',
    description: 'Clareamento, facetas e harmonização do sorriso',
    icon: FaSmile
  },
  {
    id: 'implantes',
    name: 'Implantes',
    price: 'R$ 350,00',
    description: 'Reposição de dentes perdidos com implantes dentários',
    icon: FaUserMd
  },
  {
    id: 'emergencia',
    name: 'Emergência',
    price: 'R$ 200,00',
    description: 'Atendimento urgente para dor e traumas dentários',
    icon: FaAmbulance
  },
  {
    id: 'retorno',
    name: 'Retorno',
    price: 'R$ 80,00',
    description: 'Consulta de acompanhamento e revisão de tratamento',
    icon: FaRedoAlt
  }
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
    touched: _touched,
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

  const handleServiceCardSelect = (service) => {
    setValue('service', service.id);
    setValue('serviceName', service.name);
    setValue('servicePrice', parseFloat(service.price.replace('R$ ', '').replace(',', '.')));
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
        <PersonalDataSection>
          <SectionTitle>1. Dados Pessoais</SectionTitle>
          <PersonalDataGrid>
            <InputWrapper>
              <CustomLabel>
                Nome completo
                <RequiredAsterisk>*</RequiredAsterisk>
              </CustomLabel>
              <CustomInput
                name="name"
                type="text"
                value={values.name}
                onChange={(e) => setValue('name', e.target.value)}
                onBlur={handleBlur('name')}
                placeholder="Digite seu nome completo"
                required
                $hasError={errors.name}
              />
              <HelpText $show={errors.name}>Nome é obrigatório</HelpText>
            </InputWrapper>

            <InputWrapper>
              <CustomLabel>
                Email
                <RequiredAsterisk>*</RequiredAsterisk>
              </CustomLabel>
              <CustomInput
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => setValue('email', e.target.value)}
                onBlur={handleBlur('email')}
                placeholder="seu@email.com"
                required
                $hasError={errors.email}
              />
              <HelpText $show={errors.email}>Email é obrigatório</HelpText>
            </InputWrapper>

            <InputWrapper>
              <CustomLabel>
                Telefone/WhatsApp
                <RequiredAsterisk>*</RequiredAsterisk>
              </CustomLabel>
              <CustomInput
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onBlur={handleBlur('phone')}
                placeholder="(11) 99999-9999"
                required
                $hasError={errors.phone}
              />
              <HelpText $show={errors.phone}>Telefone é obrigatório</HelpText>
            </InputWrapper>

            <InputWrapper>
              <CustomLabel>Data de nascimento</CustomLabel>
              <CustomInput
                name="birthDate"
                type="date"
                value={values.birthDate}
                onChange={(e) => setValue('birthDate', e.target.value)}
                placeholder="dd/mm/aaaa"
                $hasError={false}
              />
            </InputWrapper>
          </PersonalDataGrid>
        </PersonalDataSection>

        <FormSection>
          <SectionTitle>2. Tipo de Consulta</SectionTitle>
          <ServiceCardsGrid>
            {serviceOptions.map((service) => {
              const IconComponent = service.icon;
              const isSelected = values.service === service.id;

              return (
                <ServiceCard
                  key={service.id}
                  $selected={isSelected}
                  onClick={() => handleServiceCardSelect(service)}
                >
                  <SelectedIndicator $show={isSelected} />
                  <ServiceIconWrapper $selected={isSelected}>
                    <IconComponent />
                  </ServiceIconWrapper>
                  <ServiceName>{service.name}</ServiceName>
                  <ServicePrice>{service.price}</ServicePrice>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              );
            })}
          </ServiceCardsGrid>
          {errors.service && (
            <HelpText $show={true} style={{ marginTop: '1rem', textAlign: 'center' }}>
              Selecione um tipo de consulta
            </HelpText>
          )}
        </FormSection>

        <FormSection>
          <SectionTitle>3. Data e Horário</SectionTitle>
          <FormGrid $columns="1fr">
            <DatePicker
              name="date"
              value={values.date}
              onChange={handleChange('date')}
              onBlur={handleBlur('date')}
              error={errors.date}
              data-field="date"
            />
            <TimeSlots
              name="time"
              selectedDate={values.date}
              selectedTime={values.time}
              onTimeSelect={handleChange('time')}
              error={errors.time}
              data-field="time"
            />
          </FormGrid>
        </FormSection>

        <PreferencesSection>
          <SectionTitle>4. Preferências</SectionTitle>
          <PreferencesGrid>
            <CustomSelectWrapper>
              <CustomSelectLabel>Profissional preferido</CustomSelectLabel>
              <CustomSelect
                value={values.professional}
                onChange={(e) => setValue('professional', e.target.value)}
              >
                {professionalOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CustomSelect>
            </CustomSelectWrapper>

            <RadioGroupWrapper>
              <RadioGroupLabel>Já é nosso paciente?</RadioGroupLabel>
              <RadioOptionsContainer>
                <RadioOption>
                  <input
                    type="radio"
                    name="isReturningPatient"
                    checked={values.isReturningPatient === true}
                    onChange={() => setValue('isReturningPatient', true)}
                  />
                  <span>Sim</span>
                </RadioOption>
                <RadioOption>
                  <input
                    type="radio"
                    name="isReturningPatient"
                    checked={values.isReturningPatient === false}
                    onChange={() => setValue('isReturningPatient', false)}
                  />
                  <span>Não</span>
                </RadioOption>
              </RadioOptionsContainer>
            </RadioGroupWrapper>
          </PreferencesGrid>

          <div style={{ marginTop: '2rem' }}>
            <CustomSelectWrapper>
              <CustomSelectLabel>Convênio</CustomSelectLabel>
              <CustomSelect
                value={values.insurance}
                onChange={(e) => setValue('insurance', e.target.value)}
              >
                {insuranceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CustomSelect>
            </CustomSelectWrapper>
          </div>
        </PreferencesSection>

        <ObservationsSection>
          <SectionTitle>5. Observações</SectionTitle>
          <ObservationsWrapper>
            <ObservationsLabel>Informações adicionais</ObservationsLabel>
            <CustomTextarea
              value={values.observations}
              onChange={(e) => setValue('observations', e.target.value)}
              placeholder="Descreva sintomas, alergias, medicamentos em uso ou outras informações importantes para sua consulta..."
              maxLength={500}
            />
            <CharacterCount
              $isNearLimit={values.observations.length > 400}
              $isOverLimit={values.observations.length > 500}
            >
              <ObservationsHelpText>
                <strong>Sugestões do que incluir:</strong>
                <ul>
                  <li>Sintomas que está sentindo</li>
                  <li>Alergias a medicamentos</li>
                  <li>Medicamentos em uso</li>
                  <li>Histórico de tratamentos anteriores</li>
                </ul>
              </ObservationsHelpText>
              <span className="count">
                {values.observations.length}/500 caracteres
              </span>
            </CharacterCount>
          </ObservationsWrapper>
        </ObservationsSection>

        {canShowSummary && (
          <SummaryCard>
            <SummaryTitle>Resumo do Agendamento</SummaryTitle>
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