import styled from 'styled-components';

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  min-height: 500px;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  margin: 1rem 0;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.15);
  box-shadow: 
    0 0 30px rgba(66,211,255,0.2),
    0 0 60px rgba(66,211,255,0.1);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Profile = ({ image, name, description, location }) => (
  <ProfileSection>
    <ProfileImage src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{location}</p>
  </ProfileSection>
);

export default Profile;