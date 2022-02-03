import { useState, useEffect } from 'react';
import { saveToLocal, loadFromLocal } from '../lib/localStorage';
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import NewTripForm from "../components/NewTripForm";
import SecretPlacesCards from "../components/SecretPlacesCards";

const AddForm = ({ownCard, country, _id, name, category, urlImg, info, tags, imgUrl, trip, onAddTrip}) => {
  
  const localStorageTrips = loadFromLocal('_trips');
  const [trips, setTrips] = useState(localStorageTrips ?? []);
  console.log(trips)

  useEffect(() => {
    saveToLocal('_trips', trips);
  }, [trips]);

  async function addTripsToDatabase(trip) {
    const result = await fetch('api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip),
    });
    return await result.json();
  }

  async function addTrip(trip) { 
    const newTrip = await addTripsToDatabase(trip);
    setTrips([...trips, newTrip]);
  }
  
  

  const removeTrip = (id) => {
    const tripsToKeep = trips.filter(
      (trip) => trip._id !== id
    )
    setTrips(tripsToKeep)
  }

  return (
    <div>
      <StyledContainer>
        <h1>New Trips</h1>
        <NewTripForm onAddTrip={addTrip}/>
        {trips.map(trip => 
        <SecretPlacesCards
        addTrip={addTrip}
        ownCard={true}
        key={trip._id}
        country={trip.country}
        category={trip.category}
        name={trip.name}
        urlImg={trip.urlImg}
        info={trip.info}
        tags={trip.tags}
        imgUrl={trip.imgUrl}
        trip={trip}
        onRemove={removeTrip}
      />
        
        )}
        
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default AddForm;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
  width: 95%;
  padding-bottom: 4rem;
`;
