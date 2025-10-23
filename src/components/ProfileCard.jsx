import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  FaFacebook,
  FaTwitch,
  FaYoutube,
  FaInstagram,
  FaSteam,
  FaXbox,
  FaMicrochip,
  FaMemory,
  FaDesktop,
  FaGamepad
} from 'react-icons/fa';

const Card = styled.section`
  --card-bg: rgba(255,255,255,0.06);
  --accent1: #60e0ff;
  --accent2: #7b6bff;
  --glass-border: rgba(255,255,255,0.12);
  width: 100%;
  max-width: 820px;
  padding: 36px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  backdrop-filter: blur(14px) saturate(150%);
  border: 1px solid var(--glass-border);
  box-shadow:
    0 20px 60px rgba(2,8,23,0.6),
    inset 0 1px 0 rgba(255,255,255,0.02);
  position: relative;
  overflow: hidden;
  transition: transform .35s ease, box-shadow .35s ease;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(2,8,23,0.7);
  }

  @media (max-width: 720px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

/* slider container */
const Pages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 100%);
  transition: transform 0.55s cubic-bezier(.22,.9,.33,1);
  transform: translateX(${props => `-${props.index * 100}%`});
`;

/* single page */
const Page = styled.div`
  padding: 8px 12px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

/* image + meta */
const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.12);
  box-shadow:
    0 8px 28px rgba(96,224,255,0.06),
    0 4px 12px rgba(0,0,0,0.35);
  transition: transform .35s ease, border-color .35s ease;
  display: block;

  &:hover { transform: scale(1.04); border-color: rgba(255,255,255,0.2); }

  @media (max-width: 420px) {
    width: 120px;
    height: 120px;
  }
`;

const Name = styled.h2`
  font-size: 1.6rem;
  color: #fff;
  margin: 6px 0 2px;
  letter-spacing: 0.6px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.98rem;
  color: rgba(255,255,255,0.9);
  margin: 0;
  text-align: center;
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 6px;
`;

/* section title */
const SectionTitle = styled.h3`
  font-size: 0.95rem;
  color: var(--accent1);
  margin: 8px 0 12px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  position: relative;
  padding-bottom: 6px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 56px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    border-radius: 2px;
  }
`;

/* about text */
const AboutMe = styled.p`
  color: rgba(255,255,255,0.92);
  line-height: 1.7;
  text-align: center;
  padding: 0 28px;
  font-size: 1rem;
  max-width: 640px;
`;

/* specs */
const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
  width: 100%;
  max-width: 680px;
`;

const SpecItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255,255,255,0.95);
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
  transition: transform .25s ease, background .25s ease;

  &:hover {
    transform: translateX(6px);
    background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  }

  svg { color: var(--accent1); font-size: 1.4rem; } /* slightly larger */
`;

/* social row */
const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 12px;
  width: 100%;
  max-width: 720px;
`;

/* make social icons larger and more "tap-friendly" */
const SocialIcon = styled.a.attrs(props => ({
  'aria-label': props.label || undefined,
  title: props.label || undefined
}))`
  color: rgba(255,255,255,0.95);
  font-size: 1.6rem; /* increased base icon size */
  transition: transform .22s ease, color .22s ease, box-shadow .22s ease;
  padding: 14px; /* larger interactive area */
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 64px;  /* larger square */
  min-height: 64px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);

  &:hover {
    color: ${props => props.hoverColor || 'var(--accent1)'};
    transform: translateY(-8px) scale(1.06);
    box-shadow: 0 18px 44px ${props => (props.hoverColor ? props.hoverColor + '33' : '#60e0ff22')};
    background: rgba(255,255,255,0.045);
  }

  svg { width: 1em; height: 1em; } /* ensure icon scales with font-size */

  @media (max-width: 480px) {
    font-size: 1.3rem;
    min-width: 56px;
    min-height: 56px;
    padding: 12px;
  }
`;

/* controls */
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`;

/* simple button */
const Btn = styled.button`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform .18s ease, background .18s ease;
  font-weight: 600;
  font-size: 0.93rem;

  &:hover:not(:disabled) {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.08);
  }

  &:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
`;

/* dots */
const Dots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  border: none;
  cursor: pointer;
  transition: all .18s ease;
  ${props => props.active && css`
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    box-shadow: 0 8px 20px rgba(96,224,255,0.12);
    transform: scale(1.16);
  `}
`;

/* main component */
const ProfileCard = ({
  image,
  name,
  description,
  location,
  aboutMe,
  pcSpecs,
  social
}) => {
  const [current, setCurrent] = useState(0);
  const rootRef = useRef(null);

  const pages = ['profile', 'about', 'setup', 'social'];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowLeft') setCurrent(p => Math.max(0, p - 1));
      if (e.key === 'ArrowRight') setCurrent(p => Math.min(pages.length - 1, p + 1));
      if (e.key === 'Home') setCurrent(0);
      if (e.key === 'End') setCurrent(pages.length - 1);
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Card
      tabIndex={0}
      ref={rootRef}
      role="region"
      aria-label="Cartão de perfil interativo"
    >
      <Pages index={current}>
        {/* PAGE 1: Profile */}
        <Page aria-hidden={current !== 0}>
          <ProfileImage src={image} alt={`${name} profile`} />
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Location>📍 {location}</Location>
        </Page>

        {/* PAGE 2: About */}
        <Page aria-hidden={current !== 1}>
          <SectionTitle>Sobre mim</SectionTitle>
          <AboutMe>{aboutMe}</AboutMe>
        </Page>

        {/* PAGE 3: Setup */}
        <Page aria-hidden={current !== 2}>
          <SectionTitle>Setup</SectionTitle>
          <SpecList>
            <SpecItem><FaMicrochip /> CPU: {pcSpecs.cpu}</SpecItem>
            <SpecItem><FaMemory /> RAM: {pcSpecs.ram}</SpecItem>
            <SpecItem><FaDesktop /> GPU: {pcSpecs.gpu}</SpecItem>
          </SpecList>
        </Page>

        {/* PAGE 4: Social */}
        <Page aria-hidden={current !== 3}>
          <SectionTitle>Onde me encontrar</SectionTitle>
          <SocialLinks>
            {social?.facebook && (
              <SocialIcon
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                hoverColor="#1877f2"
                label="Facebook"
              >
                <FaFacebook />
              </SocialIcon>
            )}
            {social?.twitch && (
              <SocialIcon
                href={social.twitch}
                target="_blank"
                rel="noreferrer"
                hoverColor="#6441a5"
                label="Twitch"
              >
                <FaTwitch />
              </SocialIcon>
            )}
            {social?.youtube && (
              <SocialIcon
                href={social.youtube}
                target="_blank"
                rel="noreferrer"
                hoverColor="#ff0000"
                label="YouTube"
              >
                <FaYoutube />
              </SocialIcon>
            )}
            {social?.instagram && (
              <SocialIcon
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                hoverColor="#e1306c"
                label="Instagram"
              >
                <FaInstagram />
              </SocialIcon>
            )}
            {social?.steam && (
              <SocialIcon
                href={social.steam}
                target="_blank"
                rel="noreferrer"
                hoverColor="#1b2838"
                label="Steam"
              >
                <FaSteam />
              </SocialIcon>
            )}
            {social?.xbox && (
              <SocialIcon
                href={social.xbox}
                target="_blank"
                rel="noreferrer"
                hoverColor="#107c10"
                label="Xbox"
              >
                <FaXbox />
              </SocialIcon>
            )}
            {social?.epic && (
              <SocialIcon
                href={social.epic}
                target="_blank"
                rel="noreferrer"
                hoverColor="#313131"
                label="Epic Games"
              >
                <FaGamepad />
              </SocialIcon>
            )}
          </SocialLinks>
        </Page>
      </Pages>

      <Controls>
        <Btn
          onClick={() => setCurrent(p => Math.max(0, p - 1))}
          disabled={current === 0}
          aria-label="Página anterior"
        >
          Anterior
        </Btn>

        <Dots role="tablist" aria-label="Navegação de páginas">
          {pages.map((_, i) => (
            <Dot
              key={i}
              active={i === current}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para página ${i + 1}`}
              aria-pressed={i === current}
              title={`Página ${i + 1}`}
            />
          ))}
        </Dots>

        <Btn
          onClick={() => setCurrent(p => Math.min(pages.length - 1, p + 1))}
          disabled={current === pages.length - 1}
          aria-label="Página seguinte"
        >
          Próximo
        </Btn>
      </Controls>
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