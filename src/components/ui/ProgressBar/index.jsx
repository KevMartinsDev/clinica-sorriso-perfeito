import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import {
  ProgressContainer,
  ProgressTrack,
  ProgressLine,
  ProgressFill,
  StepContainer,
  StepCircle,
  StepLabel,
  ProgressText
} from './ProgressBar.styles';

const ProgressBar = memo(({
  steps = [],
  currentStep = 0,
  showPercentage = true,
  className
}) => {
  const progress = steps.length > 1 ? (currentStep / (steps.length - 1)) * 100 : 0;
  const completedSteps = currentStep;
  const totalSteps = steps.length;

  return (
    <ProgressContainer className={className} role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={totalSteps}>
      <ProgressTrack>
        <ProgressLine>
          <ProgressFill $width={progress} />
        </ProgressLine>

        {steps.map((step, index) => {
          let status = 'pending';
          if (index < currentStep) status = 'completed';
          if (index === currentStep) status = 'current';

          return (
            <StepContainer key={index}>
              <StepCircle
                $status={status}
                aria-current={status === 'current' ? 'step' : undefined}
                aria-label={`Passo ${index + 1}: ${step.label} - ${status === 'completed' ? 'Concluído' : status === 'current' ? 'Atual' : 'Pendente'}`}
              >
                {status === 'completed' ? (
                  <FaCheck size={12} />
                ) : (
                  index + 1
                )}
              </StepCircle>
              <StepLabel $status={status}>
                {step.label}
              </StepLabel>
            </StepContainer>
          );
        })}
      </ProgressTrack>

      {showPercentage && (
        <ProgressText>
          Passo {currentStep + 1} de {totalSteps}
          {completedSteps > 0 && ` • ${Math.round((completedSteps / totalSteps) * 100)}% concluído`}
        </ProgressText>
      )}
    </ProgressContainer>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;