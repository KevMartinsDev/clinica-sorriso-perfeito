import styled from 'styled-components';

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant', 'clickable', 'variants', 'fullHeight'].includes(prop)
})`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;