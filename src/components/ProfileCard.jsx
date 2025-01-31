import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaFacebook, FaTwitch, FaYoutube, FaInstagram, FaSteam, FaXbox, FaMicrochip, FaMemory, FaDesktop, FaGamepad } from 'react-icons/fa';

const Card = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(66, 211, 255, 0.5);
`;

const Name = styled.h2`
  font-size: 1.8em;
  color: #fff;
  margin: 10px 0;
  text-shadow: 0 0 10px rgba(66, 211, 255, 0.5);
`;

const Description = styled.p`
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.8);
  margin: 5px 0;
`;

const Section = styled.div`
  margin: 25px 0;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px; 
  transition: all 0.3s;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;

  &:hover {
    color: ${props => props.hoverColor || '#42d3ff'};
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 0 15px ${props => props.hoverColor || '#42d3ff'};
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover::after {
    content: '${props => props.label}';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 0.8em;
    white-space: nowrap;
  }
`;

const Location = styled.p`
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 10px;
`;

const SpecItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
`;

const AboutMe = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: justify;
`;

const ProfileCard = ({ 
  image, 
  name, 
  description, 
  location, 
  aboutMe,
  pcSpecs,
  social 
}) => {
  const [setHoveredIcon] = useState(null);

  return (
    <Card>
      <ProfileImage src={image} alt={`${name}'s profile`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Location>📍 {location}</Location>

      <Section>
        <SectionTitle>Sobre mim</SectionTitle>
        <AboutMe>{aboutMe}</AboutMe>
      </Section>

      <Section>
        <SectionTitle>Setup Specs</SectionTitle>
        <SpecList>
          <SpecItem><FaMicrochip /> CPU: {pcSpecs.cpu}</SpecItem>
          <SpecItem><FaMemory /> RAM: {pcSpecs.ram}</SpecItem>
          <SpecItem><FaDesktop /> GPU: {pcSpecs.gpu}</SpecItem>
        </SpecList>
      </Section>

      <Section>
        <SectionTitle>Onde me encontrar</SectionTitle>
        <SocialLinks>
          {social?.facebook && (
            <SocialIcon 
              href={social.facebook} 
              target="_blank" 
              hoverColor="#1877f2" 
              label="Facebook"
              onMouseEnter={() => setHoveredIcon('Facebook')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaFacebook />
            </SocialIcon>
          )}
          {social?.twitch && (
            <SocialIcon 
              href={social.twitch} 
              target="_blank" 
              hoverColor="#6441a5" 
              label="Twitch"
              onMouseEnter={() => setHoveredIcon('Twitch')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaTwitch />
            </SocialIcon>
          )}
          {social?.youtube && (
            <SocialIcon 
              href={social.youtube} 
              target="_blank" 
              hoverColor="#ff0000" 
              label="YouTube"
              onMouseEnter={() => setHoveredIcon('YouTube')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaYoutube />
            </SocialIcon>
          )}
          {social?.instagram && (
            <SocialIcon 
              href={social.instagram} 
              target="_blank" 
              hoverColor="#e1306c" 
              label="Instagram"
              onMouseEnter={() => setHoveredIcon('Instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaInstagram />
            </SocialIcon>
          )}
          {social?.steam && (
            <SocialIcon 
              href={social.steam} 
              target="_blank" 
              hoverColor="#1b2838" 
              label="Steam"
              onMouseEnter={() => setHoveredIcon('Steam')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaSteam />
            </SocialIcon>
          )}
          {social?.xbox && (
            <SocialIcon 
              href={social.xbox} 
              target="_blank" 
              hoverColor="#107c10" 
              label="Xbox"
              onMouseEnter={() => setHoveredIcon('Xbox')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaXbox />
            </SocialIcon>
          )}
          {social?.epic && (
            <SocialIcon 
              href={social.epic} 
              target="_blank" 
              hoverColor="#313131" 
              label="Epic Games"
              onMouseEnter={() => setHoveredIcon('Epic Games')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaGamepad />
            </SocialIcon>
          )}
        </SocialLinks>
      </Section>
    </Card>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
  pcSpecs: PropTypes.shape({
    cpu: PropTypes.string.isRequired,
    ram: PropTypes.string.isRequired,
    gpu: PropTypes.string.isRequired,
  }).isRequired,
  social: PropTypes.shape({
    facebook: PropTypes.string,
    twitch: PropTypes.string,
    youtube: PropTypes.string,
    instagram: PropTypes.string,
    steam: PropTypes.string,
    xbox: PropTypes.string,
    epic: PropTypes.string,
  }),
};

export default ProfileCard;