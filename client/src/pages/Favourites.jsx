import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards";

const Favourites = ({ onAddToFavourites, favouriteTrips }) => {
  const FavCards = favouriteTrips.map((trip, index) => (
    <SecretPlacesCards
      key={index}
      country={trip.country}
      category={trip.category}
      name={trip.name}
      urlImg={trip.urlImg}
      info={trip.info}
      tags={trip.tags}
      imgUrl={trip.imgUrl}
      trip={trip}
      onAddToFavourites={onAddToFavourites}
      favouriteTrips={favouriteTrips}
      isFavourite={true}
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
  margin: 2rem 1rem 2rem 1rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
