import { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });

    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer role="alert">
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Oops! Algo deu errado</ErrorTitle>
          <ErrorMessage>
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
            Tente recarregar a página ou voltar para o início.
          </ErrorMessage>
          <ButtonGroup>
            <Button variant="primary" onClick={this.handleReload}>
              Recarregar Página
            </Button>
            <Button variant="outline" onClick={this.handleGoHome}>
              Ir para Início
            </Button>
          </ButtonGroup>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;