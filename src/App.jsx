import ProfileCard from './components/ProfileCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #1a1a2e, #16213e);
  padding: 20px;
`;

const App = () => (
  <Container>
    <ProfileCard
      image="https://avatars.githubusercontent.com/u/154983968?v=4"
      name="Jean Pablo Alves Gonçalves"
      description="Apenas mais um maluco no mundo"
      location="Rolim De Moura, RO, Brasil"
      aboutMe="Apenas mais um cara, tentando se encontrar na vida, gosto de jogar, assistir filmes, series e animes, e claro, viver a vida numa boa."
      pcSpecs={{
        cpu: "AMD Ryzen 5 4600g",
        ram: "16GB DDR4 3200MHz",
        gpu: "AMD Radeon RX 7600"
      }}
      social={{
        facebook: "https://www.facebook.com/profile.php?id=100054401314446",
        twitch: "https://www.twitch.tv/S01lis",
        youtube: "https://www.youtube.com/@jeanalves7715",
        instagram: "https://www.instagram.com/jeanalves411/"
      }}
    />
  </Container>
);

export default App;