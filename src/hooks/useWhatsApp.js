import { useCallback } from 'react';
import { formatDateTime, formatMoney, capitalizeWords } from '../utils/formatters';

const WHATSAPP_NUMBER = '555591679300';

export const useWhatsApp = () => {
  const sendAppointment = useCallback((appointmentData) => {
    const {
      name,
      phone,
      email,
      service,
      servicePrice,
      date,
      time,
      professional,
      isReturningPatient,
      insurance,
      observations,
      birthDate
    } = appointmentData;

    const professionalText = professional === 'no-preference' ? 'Sem preferência' : 
                           professional === 'maria' ? 'Dra. Maria' : 'Dr. João';
    
    const insuranceText = insurance === 'none' ? 'Não possui' : insurance;
    const patientType = isReturningPatient ? 'Sim' : 'Não';
    
    const message = `AGENDAMENTO DE CONSULTA

Nome: ${capitalizeWords(name)}
Telefone: ${phone}
Email: ${email}
${birthDate ? `Nascimento: ${new Date(birthDate).toLocaleDateString('pt-BR')}\n` : ''}
Tipo: ${service}
Data: ${formatDateTime(date, time)}
Profissional: ${professionalText}
Valor: ${formatMoney(servicePrice)}
Convenio: ${insuranceText}
Ja e paciente: ${patientType}
${observations ? `Observacoes: ${observations}\n` : ''}
Aguardo confirmacao!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const sendContact = useCallback((contactData) => {
    const { name, phone, email, subject, message } = contactData;
    
    const whatsappMessage = `Olá! Recebi seu contato através do site.

*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${phone}
*Assunto:* ${subject}
*Mensagem:* ${message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const sendEmergency = useCallback(() => {
    const message = 'EMERGÊNCIA - Preciso de atendimento urgente';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const sendGeneralInquiry = useCallback((message = 'Olá! Gostaria de agendar uma consulta.') => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  return {
    sendAppointment,
    sendContact,
    sendEmergency,
    sendGeneralInquiry,
    whatsappNumber: WHATSAPP_NUMBER
  };
};