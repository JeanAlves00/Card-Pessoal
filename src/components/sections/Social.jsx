import { useState } from 'react';
import styled from 'styled-components';
import Profile from './sections/Profile';
import About from './sections/About';
import Setup from './sections/Setup';
import Social from './sections/Social';

const Card = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  border-radius: 24px;
  box-shadow: 0 15px 50px rgba(2,8,23,0.65);
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const NavButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: ${props => props.active ? 'rgba(255,255,255,0.1)' : 'transparent'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const ProfileCard = (props) => {
  const [activeSection, setActiveSection] = useState('profile');

  const sections = {
    profile: <Profile {...props} />,
    about: <About {...props} />,
    setup: <Setup {...props} />,
    social: <Social {...props} />
  };

  return (
    <Card>
      <Navigation>
        <NavButton 
          active={activeSection === 'profile'} 
          onClick={() => setActiveSection('profile')}
        >
          Perfil
        </NavButton>
        <NavButton 
          active={activeSection === 'about'} 
          onClick={() => setActiveSection('about')}
        >
          Sobre
        </NavButton>
        <NavButton 
          active={activeSection === 'setup'} 
          onClick={() => setActiveSection('setup')}
        >
          Configurações
        </NavButton>
        <NavButton 
          active={activeSection === 'social'} 
          onClick={() => setActiveSection('social')}
        >
          Redes Sociais
        </NavButton>
      </Navigation>
      {sections[activeSection]}
    </Card>
  );
};

export default ProfileCard;