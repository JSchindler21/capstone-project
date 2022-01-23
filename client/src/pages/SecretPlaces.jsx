import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards";

const SecretPlaces = ({trip, onAddToFav, favCards  }) => {
  return (
    <div>
      <StyledContainer>
        <header>Secret Places</header>
        {trip.map((trip, index) => (
           <SecretPlacesCards
              key={index}
              id={trip.id}
              country={trip.country}
              category={trip.category}
              name={trip.name}
              info={trip.info}
              tags={trip.tags}
              image={trip.image} 
             favCards={favCards}
            onAddToFav={onAddToFav}/>
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



