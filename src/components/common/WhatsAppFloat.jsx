import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: #25D366;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    animation: none;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 56px;
    height: 56px;
  }
  
  svg {
    color: white;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1rem;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: var(--text-dark);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NotificationDot = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite;
`;

const WhatsAppFloat = ({ 
  showTooltip = true, 
  message = "Olá! Gostaria de agendar uma consulta.",
  showNotification = false 
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/555591679300?text=${encodedMessage}`, '_blank');
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 100 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 2 }
    }
  };

  return (
    <FloatingButton
      onClick={handleClick}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      data-testid="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp />
      
      {showNotification && <NotificationDot />}
      
      {showTooltip && (
        <Tooltip
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          $show={true}
        >
          Fale conosco!
        </Tooltip>
      )}
    </FloatingButton>
  );
};

export default WhatsAppFloat;