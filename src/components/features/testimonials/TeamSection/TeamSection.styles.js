import styled from 'styled-components';

export const TeamSectionContainer = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, rgb(248, 249, 250) 0%, rgb(233, 236, 239) 100%);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;

export const TeamCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 320px;
  }
`;

export const TeamCardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 400%;
    object-fit: cover;
    object-position: center 15%;
    transform: translateY(-15%);
  }

  /* Ajuste específico para a imagem do Dr. João (segundo card) */
  ${TeamCard}:nth-child(2) & img {
    object-position: center 25%;
    transform: translateY(-25%);
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const TeamCardContent = styled.div`
  text-align: center;
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const TeamMemberName = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const TeamMemberSpecialty = styled.p`
  color: var(--text-dark);
  font-size: 1rem;
  margin-bottom: 0.75rem;

  strong {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const TeamMemberEducation = styled.p`
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;

  strong {
    color: var(--text-dark);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TeamMemberDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

export const DifferentialsTitle = styled.h3`
  text-align: center;
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 3rem 0 2.5rem 0;
`;

export const DifferentialsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.8rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const DifferentialItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

export const DifferentialIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(46, 139, 87, 0.15);
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: bold;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${DifferentialItem}:hover & {
    transform: scale(1.1);
    background: var(--primary-color);
    color: white;
  }
`;