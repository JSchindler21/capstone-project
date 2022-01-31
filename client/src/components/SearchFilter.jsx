import { useState } from "react";
import styled from "styled-components";

import SecretPlacesCards from "./SecretPlacesCards";

function SearchFilter({ tripsData, onAddToFavourites, favouriteTrips }) {
  const [searchTrip, setSearchTrips] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
   
    setWordEntered(searchWord);
    const searchResult = tripsData.filter((trip) => {
      return (
        trip.country.toLowerCase().includes(searchWord.toLowerCase()) ||
        trip.category.toLowerCase().includes(searchWord.toLowerCase()) ||
        trip.tags.map(tag => tag.toLowerCase()).some(tag => tag.includes(searchWord.toLowerCase())) 
      );
    });

    if (searchWord === "") {
      setSearchTrips([]);
    } else {
      setSearchTrips(searchResult);
      
    }
  };

  return (
    <div>
      <div>
        <StyledInput
          type="text "
          placeholder="Search for Travel inspiration..."
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>

      <div>
        {searchTrip.map((trip, key) => {
          return (
            <div key={key}>
              <SecretPlacesCards
                country={trip.country}
                name={trip.name}
                imgUrl={trip.imgUrl}
                category={trip.category}
                urlImg={trip.urlImg}
                info={trip.info}
                tags={trip.tags}
                onAddToFavourites={onAddToFavourites}
                trip={trip}
                isFavourite={favouriteTrips?.some(
                  (favourite) => favourite.id === trip.id
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchFilter;

const StyledInput = styled.input`
  width: 100%;
  margin-top: 1rem;
  background: var(--primary);
  font-size: 14px;
  padding: 0.5rem;
  font-family: "Courgette", cursive;
  border: none;
`;
