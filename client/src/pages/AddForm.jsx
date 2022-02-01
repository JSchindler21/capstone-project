import styled from "styled-components";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";

import FooterNavbar from "../components/FooterNavbar";
import NewTripForm from "../components/NewTripForm";
import SecretPlacesCards from "../components/SecretPlacesCards";

function AddForm() {
  const localStorageTrip = loadFromLocal("_trips");
  const [trips, setTrips] = useState(localStorageTrip ?? []);
  

  useEffect(() => {
    saveToLocal("_trips", trips);
  }, [trips]);

  async function addTripsToDatabase(trip) {
    const result = await fetch("api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    return await result.json();
  }

  async function addTrip(trip) {
    const newTrip =  await addTripsToDatabase(trip);
    setTrips([...trips, newTrip]);

  }


  const removeTrip = (id) => {
    setTrips(trips.filter((trip) => trip._id !== id));
  };
  

  return (
    <div>
      <StyledContainer>
        <NewTripForm onAddTrip={addTrip} />
        <div>
          {trips.map((trip) => (
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
              ownCard={true}
              onRemove={removeTrip}
            />

            
          ))}
        </div>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
}

export default AddForm;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 2rem 1rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;


