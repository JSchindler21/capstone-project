import { useState } from "react";
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import NewTripForm from "../components/NewTripForm";
import SecretPlacesCards from "../components/SecretPlacesCards";


const AddForm = (ownCard) => {

// [trips, setTrips] = useState([])

// const onRemove = (_id) => {
//   const newTripsToRemove = trips.filter(
//     (trip) => trip !== _id
//   )
//   setTrips(newTripsToRemove)
// }

  return (
    <div>
       
      <StyledContainer>
        <h1>New Trips</h1>
        <NewTripForm />
        <SecretPlacesCards 
        ownCard={ownCard}
      
        />
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
  margin-top: 3rem; 
  text-align: center;
  width: 95%;
  padding-bottom: 4rem; 
`;
