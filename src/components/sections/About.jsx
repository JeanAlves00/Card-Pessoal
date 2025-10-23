import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  margin: 1rem 0;
`;

const AboutContent = styled.div`
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const About = ({ aboutMe }) => (
  <AboutSection>
    <h3>Sobre Mim</h3>
    <AboutContent>
      <p>{aboutMe}</p>
    </AboutContent>
  </AboutSection>
);

export default About;