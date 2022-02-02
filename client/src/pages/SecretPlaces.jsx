import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import SecretPlacesCards from "../components/SecretPlacesCards";

const SecretPlaces = ({ AllTrips, onAddToFavourites, favouriteTrips, }) => {
  const TripCards = AllTrips.map((trip) => (
    <SecretPlacesCards
      key={trip._id}
      country={trip.country}
      category={trip.category}
      name={trip.name}
      urlImg={trip.urlImg}
      info={trip.info}
      tags={trip.tags}
      imgUrl={trip.imgUrl}
      trip={trip}
      onAddToFavourites={onAddToFavourites}
      isFavourite={favouriteTrips?.some(
        (favourite) => favourite.id === trip.id
      )}
    />
  ));

  return (
    <div>
      <StyledContainer>
        
        <h1>Secret Places</h1>
        <SearchFilter tripsData={AllTrips} onAddToFavourites={onAddToFavourites} favouriteTrips={favouriteTrips} />
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
  margin: auto;
  margin-top: 3rem; 
  text-align: center;
  width: 80%;
  padding-bottom: 4rem; 
`;
