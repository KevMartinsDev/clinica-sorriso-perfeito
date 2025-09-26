import { FaWhatsapp } from 'react-icons/fa';
import {
  FloatingButton,
  Tooltip,
  NotificationDot
} from './WhatsAppFloat.styles';

const WhatsAppFloat = ({
  showTooltip = true,
  message = 'Olá! Gostaria de agendar uma consulta.',
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
        type: 'spring',
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