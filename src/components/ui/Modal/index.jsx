import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalTitle,
  ModalPrice,
  ModalBody,
  ModalDescription,
  FeaturesList,
  FeatureItem,
  ContactButton
} from './Modal.styles';

const Modal = ({ isOpen, onClose, service, category }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getServiceDetails = (serviceName, categoryName) => {
    const details = {
      'Consulta + Limpeza': {
        description: 'Consulta completa com avaliação detalhada e limpeza profissional dos dentes.',
        features: ['Exame clínico completo', 'Radiografias se necessário', 'Limpeza com ultrassom', 'Orientações de higiene bucal']
      },
      'Restauração (resina)': {
        description: 'Restauração estética com resina composta para tratamento de cáries.',
        features: ['Material estético de alta qualidade', 'Procedimento indolor', 'Cor personalizada', 'Durabilidade garantida']
      },
      'Aplicação de flúor': {
        description: 'Aplicação preventiva de flúor para fortalecimento do esmalte dentário.',
        features: ['Prevenção de cáries', 'Fortalecimento do esmalte', 'Procedimento rápido e indolor', 'Proteção duradoura']
      },
      'Clareamento dental': {
        description: 'Procedimento para clarear os dentes de forma segura e eficaz.',
        features: ['Clareamento com gel profissional', 'Resultados visíveis na primeira sessão', 'Acompanhamento pós-tratamento', 'Kit para manutenção']
      },
      'Gengivoplastia estética': {
        description: 'Cirurgia periodontal para correção estética da gengiva.',
        features: ['Melhora do contorno gengival', 'Sorriso mais harmônico', 'Procedimento minimamente invasivo', 'Recuperação rápida']
      },
      'Aparelho metálico': {
        description: 'Tratamento ortodôntico com aparelho fixo metálico tradicional.',
        features: ['Consultas mensais incluídas', 'Ajustes e manutenções', 'Acompanhamento completo', 'Resultado garantido']
      },
      'Contenção ortodôntica': {
        description: 'Aparelho de contenção para manutenção dos resultados ortodônticos.',
        features: ['Mantém dentes alinhados', 'Removível ou fixo', 'Confecção personalizada', 'Acompanhamento incluído']
      },
      'Implante unitário': {
        description: 'Implante de titânio para substituição de um dente perdido.',
        features: ['Implante de titânio importado', 'Cirurgia minimamente invasiva', 'Acompanhamento pós-cirúrgico', 'Garantia do implante']
      },
      'Levantamento de seio': {
        description: 'Procedimento para aumentar volume ósseo na região posterior superior.',
        features: ['Possibilita implante em casos complexos', 'Técnica avançada', 'Material biocompatível', 'Acompanhamento especializado']
      }
    };

    return details[serviceName] || {
      description: `Serviço profissional de ${categoryName.toLowerCase()} realizado com os mais altos padrões de qualidade.`,
      features: ['Atendimento personalizado', 'Equipamentos modernos', 'Profissionais especializados', 'Acompanhamento completo']
    };
  };

  if (!service) {
    return null;
  }

  const serviceDetails = getServiceDetails(service.name, category);

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <ModalContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ModalHeader>
              <CloseButton onClick={onClose}>
                <FaTimes />
              </CloseButton>
              <ModalTitle>{service.name}</ModalTitle>
              <ModalPrice>{service.price}</ModalPrice>
            </ModalHeader>

            <ModalBody>
              <ModalDescription>
                {serviceDetails.description}
              </ModalDescription>

              <FeaturesList>
                {serviceDetails.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>

              <ContactButton onClick={() => {
                const message = `Olá! Gostaria de saber mais sobre ${service.name} (${service.price}).`;
                window.open(`https://wa.me/555591679300?text=${encodeURIComponent(message)}`, '_blank');
              }}>
                Agendar pelo WhatsApp
              </ContactButton>
            </ModalBody>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;