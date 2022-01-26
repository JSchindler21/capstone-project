import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";

const MyProfil = () => {
  return (
    <div>
      <StyledContainer>
        <header>My Profil</header>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default MyProfil;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
