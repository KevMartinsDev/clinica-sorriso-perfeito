import { teamData, clinicDifferentials } from '../../data/team';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Nossa Equipe</h2>
        
        <div className="team-grid">
          {teamData.map((doctor) => (
            <div key={doctor.id} className="team-card">
              <div className="team-card-image">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{doctor.name}</h3>
                <p className="team-member-cro">{doctor.cro}</p>
                <p className="team-member-specialty">
                  <strong>Especialista em:</strong> {doctor.specialty}
                </p>
                <p className="team-member-education">
                  <strong>Formação:</strong> {doctor.education}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="differentials-section">
          <h3 className="differentials-title">Nossos Diferenciais</h3>
          <ul className="differentials-list">
            {clinicDifferentials.map((differential, index) => (
              <li key={index} className="differential-item">
                <span className="differential-icon">✓</span>
                {differential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;