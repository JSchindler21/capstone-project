import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
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
        <header>Secret Places</header>
        <SearchFilter tripsData={AllTrips} />
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
  margin: 2rem 1rem 2rem 1rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
