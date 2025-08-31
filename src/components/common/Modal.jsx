import { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-color), #3a9d66);
  color: white;
  padding: 2rem;
  border-radius: 20px 20px 0 0;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ModalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalDescription = styled.p`
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓';
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

const ContactButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #246342;
    transform: translateY(-2px);
  }
`;

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

  if (!service) return null;

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
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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