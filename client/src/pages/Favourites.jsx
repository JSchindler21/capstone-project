import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards";

const Favourites = (favTrip, onAddToFavourites, favouriteTrips) => {
  const FavCards = favTrip.map((trip, index) => (
    <SecretPlacesCards
      key={index}
      country={trip.country}
      category={trip.category}
      name={trip.name}
      info={trip.info}
      tags={trip.tags}
      image={trip.image}
      trip={trip}
      onAddToFavourites={onAddToFavourites}
      isFavourite={favouriteTrips}
    />
  ));

  return (
    <div>
      <StyledContainer>
        <header>Favourites</header>
        <div>{FavCards}</div>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default Favourites;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
