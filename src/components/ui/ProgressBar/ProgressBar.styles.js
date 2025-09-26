import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProgressTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1rem;
`;

export const ProgressLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--border-color);
  transform: translateY(-50%);
  z-index: 1;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
  border-radius: 2px;
  width: ${props => props.$width}%;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const StepCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 2px solid;
  background-color: var(--white);

  ${props => {
    if (props.$status === 'completed') {
      return `
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      `;
    }
    if (props.$status === 'current') {
      return `
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
        box-shadow: 0 0 0 4px rgba(46, 139, 87, 0.1);
      `;
    }
    return `
      background-color: var(--white);
      border-color: var(--border-color);
      color: var(--text-light);
    `;
  }}
`;

export const StepLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: ${props => props.$status === 'current' ? '600' : '400'};
  color: ${props => {
    if (props.$status === 'completed' || props.$status === 'current') {
      return 'var(--primary-color)';
    }
    return 'var(--text-light)';
  }};
  text-align: center;
  max-width: 80px;
  line-height: 1.2;
`;

export const ProgressText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-light);
`;