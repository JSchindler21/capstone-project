import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards"

const SecretPlaces = ({GetTrip}) => {

  

  return (
    <div>
      <StyledContainer>
        <header>Secret Places</header>
{GetTrip.map((trip, index) => ( 
        <SecretPlacesCards key={index} country={trip.country}/>
))}
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default SecretPlaces;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
