import styled from 'styled-components';
import { FaMicrochip, FaMemory, FaDesktop } from 'react-icons/fa';

const SetupSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  margin: 1rem 0;
`;

const SpecsList = styled.ul`
  list-style: none;
  padding: 2rem;
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SpecItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  svg {
    font-size: 1.5rem;
    color: #60e0ff;
  }
`;

const Setup = ({ pcSpecs }) => (
  <SetupSection>
    <h3>Setup</h3>
    <SpecsList>
      <SpecItem><FaMicrochip /> {pcSpecs.cpu}</SpecItem>
      <SpecItem><FaMemory /> {pcSpecs.ram}</SpecItem>
      <SpecItem><FaDesktop /> {pcSpecs.gpu}</SpecItem>
    </SpecsList>
  </SetupSection>
);

export default Setup;