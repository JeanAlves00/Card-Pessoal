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
      aboutMe="Nada a declarar ( Só falo na presença do meu advogado )."
      pcSpecs={{
        cpu: "AMD Ryzen 5 4600g",
        ram: "16GB DDR4 3200MHz",
        gpu: "AMD Radeon RX 7600"
      }}
      social={{
        facebook: "https://www.facebook.com/profile.php?id=100054401314446",
        twitch: "https://www.twitch.tv/S01lis",
        youtube: "https://www.youtube.com/@jeanalves7715",
        instagram: "https://www.instagram.com/jeanalves411/",
        steam: "https://steamcommunity.com/profiles/76561199271439295/",
        xbox: "https://account.xbox.com/pt-br/profile?gamertag=Jean Alves#1603",
        epic: "https://store.epicgames.com/u/210a011e8ca24753a6beb3b473b19772"
      }}
    />
  </Container>
);

export default App;