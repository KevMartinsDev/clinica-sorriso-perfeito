import { SpinnerContainer, Spinner, LoadingText } from './LoadingSpinner.styles';

const LoadingSpinner = ({ size, text = 'Carregando...' }) => {
  return (
    <SpinnerContainer>
      <Spinner $size={size} />
      {text && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;