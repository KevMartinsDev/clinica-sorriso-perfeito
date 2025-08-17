import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contato - Clínica Sorriso Perfeito</Title>
    </Container>
  );
};

export default Contact;