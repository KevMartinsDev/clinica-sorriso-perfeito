import { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';

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
    { value: 'informacoes', label: 'Informações' },
    { value: 'orcamento', label: 'Orçamento' },
    { value: 'reclamacao', label: 'Reclamação' },
    { value: 'elogio', label: 'Elogio' }
  ];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Nome é obrigatório';
        } else if (value.trim().length < 2) {
          error = 'Nome deve ter pelo menos 2 caracteres';
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
        } else {
          const cleaned = value.replace(/\D/g, '');
          if (cleaned.length < 10) {
            error = 'Telefone deve ter pelo menos 10 dígitos';
          }
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

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
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
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      const whatsappMessage = `Olá! Recebi seu contato através do site.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Assunto:* ${subjectOptions.find(opt => opt.value === formData.subject)?.label}\n*Mensagem:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/5599916793000?text=${encodeURIComponent(whatsappMessage)}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>
        <h3>Mensagem enviada com sucesso!</h3>
        <p>Obrigado pelo seu contato. Em breve você será redirecionado para o WhatsApp para darmos continuidade ao atendimento.</p>
        <button 
          className="btn btn-primary"
          onClick={() => setIsSuccess(false)}
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-row">
          <Input
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            error={errors.name}
            required
          />
        </div>

        <div className="form-row-double">
          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
          />
          
          <Input
            label="Telefone"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
            error={errors.phone}
            mask="phone"
            required
          />
        </div>

        <div className="form-row">
          <Select
            label="Assunto"
            placeholder="Selecione o assunto"
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
            options={subjectOptions}
            error={errors.subject}
            required
          />
        </div>

        <div className="form-row">
          <Textarea
            label="Mensagem"
            placeholder="Digite sua mensagem..."
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
            error={errors.message}
            rows={5}
            required
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-large"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};

export default ContactForm;