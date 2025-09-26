import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaTag, FaComment, FaCheck } from 'react-icons/fa';
import {
  ContactFormContainer,
  FormHeader,
  FormTitle,
  FormDescription,
  FormBody,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  FormError,
  SubmitButton,
  SuccessMessage,
  LoadingSpinner
} from './ContactForm.styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjectOptions = [
    { value: '', label: 'Selecione um assunto' },
    { value: 'consulta', label: 'Agendar Consulta' },
    { value: 'informacoes', label: 'Informações' },
    { value: 'orcamento', label: 'Orçamento' },
    { value: 'emergencia', label: 'Emergência' },
    { value: 'outros', label: 'Outros' }
  ];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Nome é obrigatório';
        } else if (value.trim().length < 2) {
          error = 'Nome deve ter pelo menos 2 caracteres';
        } else if (value.trim().length > 60) {
          error = 'Nome deve ter no máximo 60 caracteres';
        } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value.trim())) {
          error = 'Nome deve conter apenas letras e espaços';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Email inválido';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Telefone é obrigatório';
        } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value)) {
          error = 'Telefone inválido';
        }
        break;

      case 'subject':
        if (!value) {
          error = 'Assunto é obrigatório';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Mensagem é obrigatória';
        } else if (value.trim().length < 10) {
          error = 'Mensagem deve ter pelo menos 10 caracteres';
        }
        break;
    }

    return error;
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (name, value) => {
    let processedValue = value;

    if (name === 'phone') {
      processedValue = formatPhone(value);
    } else if (name === 'name') {
      processedValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      processedValue = processedValue.replace(/\s+/g, ' ');
      if (processedValue.length > 60) {
        processedValue = processedValue.substring(0, 60);
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    if (value) {
      const error = validateField(name, processedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSuccess(true);

      const whatsappMessage = `Olá! Nova mensagem do site:

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Assunto:* ${subjectOptions.find(opt => opt.value === formData.subject)?.label}

*Mensagem:*
${formData.message}`;

      setTimeout(() => {
        const whatsappUrl = `https://wa.me/555591679300?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
      }, 2000);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <SuccessMessage>
        <div className="success-icon">
          <FaCheck />
        </div>
        <h3>Mensagem enviada com sucesso!</h3>
        <p>Obrigado pelo seu contato. Em breve você será redirecionado para o WhatsApp para darmos continuidade ao atendimento.</p>
        <button onClick={resetForm} className="new-message-btn">
          Enviar nova mensagem
        </button>
      </SuccessMessage>
    );
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <FormBody>
        <FormField>
          <FormLabel>
            <FaUser />
            Nome Completo *
          </FormLabel>
          <FormInput
            type="text"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            $hasError={!!errors.name}
            maxLength={60}
          />
          {errors.name && <FormError>{errors.name}</FormError>}
        </FormField>

        <div className="form-row">
          <FormField>
            <FormLabel>
              <FaEnvelope />
              Email *
            </FormLabel>
            <FormInput
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              $hasError={!!errors.email}
            />
            {errors.email && <FormError>{errors.email}</FormError>}
          </FormField>

          <FormField>
            <FormLabel>
              <FaPhone />
              Telefone *
            </FormLabel>
            <FormInput
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              $hasError={!!errors.phone}
            />
            {errors.phone && <FormError>{errors.phone}</FormError>}
          </FormField>
        </div>

        <FormField>
          <FormLabel>
            <FaTag />
            Assunto *
          </FormLabel>
          <FormSelect
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            $hasError={!!errors.subject}
          >
            {subjectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormSelect>
          {errors.subject && <FormError>{errors.subject}</FormError>}
        </FormField>

        <FormField>
          <FormLabel>
            <FaComment />
            Mensagem *
          </FormLabel>
          <FormTextarea
            placeholder="Digite sua mensagem... (mínimo 10 caracteres)"
            rows="5"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            $hasError={!!errors.message}
          />
          <div className="char-counter">
            {formData.message.length}/1000
          </div>
          {errors.message && <FormError>{errors.message}</FormError>}
        </FormField>

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner />
              Enviando...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Enviar Mensagem
            </>
          )}
        </SubmitButton>
      </FormBody>
    </ContactFormContainer>
  );
};

export default ContactForm;