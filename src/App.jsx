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
      aboutMe="apenas mais um maluco no mundo, tentando desvendar os misterios da vida (spoiler: Não achei detonado sobre). Gosto santificar o mundo salvando
      cidadoes inocentes no mundo dos games ou, claro, os destruindo, maratonar filmes e series e jogar ESO como se fosse um clt (quem me dera fosse pago por isso),
      é claro, tentar viver a vida no modo easy...  ou pelo menos tentar, porque o chefão final é sempre o boleto no fim do mês.😅"
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