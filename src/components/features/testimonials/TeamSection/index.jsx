import { teamData, clinicDifferentials } from '../../../../data/team';
import {
  TeamSectionContainer,
  Container,
  SectionTitle,
  TeamGrid,
  TeamCard,
  TeamCardImage,
  TeamCardContent,
  TeamMemberName,
  TeamMemberSpecialty,
  TeamMemberEducation,
  TeamMemberDescription,
  DifferentialsTitle,
  DifferentialsList,
  DifferentialItem,
  DifferentialIcon
} from './TeamSection.styles';

const TeamSection = () => {
  return (
    <TeamSectionContainer>
      <Container>
        <SectionTitle>Nossa Equipe</SectionTitle>

        <TeamGrid>
          {teamData.map((doctor) => (
            <TeamCard key={doctor.id}>
              <TeamCardImage>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
              </TeamCardImage>
              <TeamCardContent>
                <TeamMemberName>{doctor.name}</TeamMemberName>
                <TeamMemberSpecialty>
                  <strong>Especialista em:</strong> {doctor.specialty}
                </TeamMemberSpecialty>
                <TeamMemberEducation>
                  <strong>Formação:</strong> {doctor.education}
                </TeamMemberEducation>
                <TeamMemberDescription>
                  {doctor.description}
                </TeamMemberDescription>
              </TeamCardContent>
            </TeamCard>
          ))}
        </TeamGrid>

        <DifferentialsTitle>Nossos Diferenciais</DifferentialsTitle>
        <DifferentialsList>
          {clinicDifferentials.map((differential, index) => (
            <DifferentialItem key={index}>
              <DifferentialIcon>✓</DifferentialIcon>
              {differential}
            </DifferentialItem>
          ))}
        </DifferentialsList>
      </Container>
    </TeamSectionContainer>
  );
};

export default TeamSection;