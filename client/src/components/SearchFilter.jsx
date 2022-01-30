import { useState } from "react";
import styled from "styled-components";

import SecretPlacesCards from "./SecretPlacesCards";

function SearchFilter({ tripsData }) {
  const [searchTrip, setSearchTrips] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
   
    setWordEntered(searchWord);
    const searchResult = tripsData.filter((value) => {
      return (
        value.country.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.category.toLowerCase().includes(searchWord.toLowerCase()) 
        
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
        {searchTrip.map((value, key) => {
          return (
            <div key={key}>
              <SecretPlacesCards
                country={value.country}
                name={value.name}
                imgUrl={value.imgUrl}
                category={value.category}
                urlImg={value.urlImg}
                info={value.info}
                tags={value.tags}
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
