import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards";

const SecretPlaces = ({ AllTrips, onAddToFavourites, favouriteTrips }) => {
  console.log(AllTrips)
  const TripCards = AllTrips.map((trip, index) => (
    <SecretPlacesCards
      key={index}
      country={trip.country}
      category={trip.category}
      name={trip.name}
      info={trip.info}
      tags={trip.tags}
      imgUrl={trip.imgUrl}
      trip={trip}
      onAddToFavourites={onAddToFavourites}
      isFavourite={favouriteTrips?.some((favourite) => favourite.id === trip.id)}
    />
  ));

  return (
    <div>
      <StyledContainer>
        <header>Secret Places</header>
        <div>{TripCards}</div>
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
