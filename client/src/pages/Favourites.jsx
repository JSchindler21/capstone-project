import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import SecretPlacesCards from "../components/SecretPlacesCards";
import Header from "../components/Header";

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
       
        <h1>Favourites</h1>
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
  margin: auto;
  margin-top: 2rem; 
  text-align: center;
  width: 95%;
  padding-bottom: 4rem; 
`;
