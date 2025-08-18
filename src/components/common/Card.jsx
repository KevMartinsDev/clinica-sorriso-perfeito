import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${props => props.$variant === 'default' && `
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-4px);
    }
  `}
  
  ${props => props.$variant === 'elevated' && `
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
      transform: translateY(-6px);
    }
  `}
  
  ${props => props.$variant === 'outlined' && `
    border: 2px solid #e1e5e9;
    box-shadow: none;
    
    &:hover {
      border-color: var(--primary-color);
      box-shadow: 0 4px 16px rgba(46, 139, 87, 0.1);
    }
  `}
  
  ${props => props.$clickable && `
    cursor: pointer;
  `}
  
  ${props => props.$fullHeight && `
    height: 100%;
  `}
`;

const CardContent = styled.div`
  padding: ${props => props.$padding || '1.5rem'};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = ({ 
  children, 
  variant = 'default',
  clickable = false,
  fullHeight = false,
  padding,
  onClick,
  className,
  ...props 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <CardContainer
      $variant={variant}
      $clickable={clickable}
      $fullHeight={fullHeight}
      onClick={onClick}
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      <CardContent $padding={padding}>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card;