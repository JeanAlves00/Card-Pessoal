import ProfileCard from './components/ProfileCard';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(
    45deg, 
    rgba(16, 16, 36, 0.85), 
    rgba(12, 23, 52, 0.85)
  ), 
  url('https://wallpaperaccess.com/full/6682744.gif') 
  no-repeat center center fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px; // Increased from 1040px
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Page>
      <Wrapper>
        <ProfileCard
          image="https://avatars.githubusercontent.com/u/154983968?v=4"
          name="Jean Pablo Alves Gonçalves"
          description="Apenas mais um maluco no mundo"
          location="Rolim De Moura, RO, Brasil"
          aboutMe="Sou especialista em transformar café em código, professor honorário de gambiarras e colecionador profissional de abas do navegador. Procrastino com estilo: planejo, adio e finjo que é parte do workflow. Nada a declarar — só falo na presença do meu advogado (e do meu gato)."
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
      </Wrapper>
    </Page>
  </>
);

export default App;