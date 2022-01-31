import styled from "styled-components";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";

import FooterNavbar from "../components/FooterNavbar";
import NewTripForm from "../components/NewTripForm";

function MyProfil() {
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
    console.log(trip)
    await addTripsToDatabase(trip);
    setTrips([...trips, trip]);
    
  }

  return (
    <div>
      <StyledContainer>
        <NewTripForm onAddTrip={addTrip} />
        <div>
          {trips.map((trip, index) => (
            <div key={index}>
              <p>{trip.country}</p>
              <p>{trip.category}</p>
              <p>{trip.name}</p>
              <p>{trip.tags}</p>
            </div>
          ))}
        </div>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
}

export default MyProfil;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
