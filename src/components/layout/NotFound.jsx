import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { memo } from 'react';
import Button from '../ui/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: var(--light-bg);
`;

const ErrorNumber = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin: 1rem 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem 0 0 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavigationItem = styled.li`
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-color);
      color: var(--white);
    }
  }
`;

const NotFound = memo(() => (
  <NotFoundContainer role="main">
    <ErrorNumber aria-label="Erro 404">404</ErrorNumber>
    <ErrorTitle>Página não encontrada</ErrorTitle>
    <ErrorMessage>
      A página que você está procurando não existe ou foi movida para outro local.
      Que tal navegar para uma das nossas páginas principais?
    </ErrorMessage>
    
    <ButtonGroup>
      <Button as={Link} to="/" variant="primary" size="large">
        Ir para Início
      </Button>
      <Button as={Link} to="/agendamento" variant="secondary" size="large">
        Agendar Consulta
      </Button>
    </ButtonGroup>

    <nav aria-label="Navegação principal">
      <NavigationList>
        <NavigationItem>
          <Link to="/sobre">Sobre Nós</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/servicos">Serviços</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/galeria">Galeria</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/blog">Blog</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/contato">Contato</Link>
        </NavigationItem>
      </NavigationList>
    </nav>
  </NotFoundContainer>
));

export default NotFound;