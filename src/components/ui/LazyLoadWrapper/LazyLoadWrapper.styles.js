import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PlaceholderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  font-size: 0.875rem;
  min-height: ${props => props.height || '200px'};
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 0.3s ease;

  &::before {
    content: '⏳';
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;