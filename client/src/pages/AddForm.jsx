import styled from "styled-components";
import { useState, useEffect } from "react";
import { saveToLocal, loadFromLocal } from "../lib/localStorage";


import FooterNavbar from "../components/FooterNavbar";
import NewTripForm from "../components/NewTripForm";

function AddForm() {
  const localStorageTrip = loadFromLocal("_trips");
  const [trips, setTrips] = useState(localStorageTrip ?? []);
  const [isVisible, setIsVisible] = useState(true);

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
    await addTripsToDatabase(trip);
    setTrips([...trips, trip]);
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  
  // const OnRemove = (id) => {
  //  setTrips(trips.filter((trip) => trip.id !== id))
  // }

  return (
    <div>
      <StyledContainer>
        <NewTripForm onAddTrip={addTrip} />
        <div>
          {trips.map((trip, index, ) => (
            <CardContainer key={index} >
              <div className="grid1">
                <h3>{trip.country}</h3>
                <StyledCategory> Category: {trip.category}</StyledCategory>
              </div>

              <div className="grid2">
                <StyledProfil src={trip.urlImg} alt="Foto" />
                <StyledName>{trip.name}</StyledName>
                <StyledTags>{trip.tags}</StyledTags>
              </div>

              <div className="grid3">
                <StyledImg src={trip.imgUrl} alt="Foto" />
              </div>

              <div className="grid4">
                <StyledButton onClick={handleClick}>
                  show more...
                </StyledButton>
                {isVisible ? null : <StyledInfo>{trip.info}</StyledInfo>}
              {/* <button onClick={OnRemove}>❌</button> */}
              </div>
            </CardContainer>
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
  margin: auto;
  text-align: center;
  padding: 1rem 2rem 4rem 2rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 0fr 1fr;
  color: var(--secondary);
  background: var(--primary);
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid var(--secondary);
  box-shadow: 1rem 1.2rem 1.2rem var(--third);
  h3 {
    color: black;
    font-size: 25px;
  }

  .grid1 {
    grid-column: 1 / 6;
    grid-row: 1 ;
  }

  .grid2 {
    grid-column: 1 / 2 ;
    grid-row: 2 / 4;
  }
  .grid3 {
    grid-column: 3 / 6;
    grid-row: 2 / 4;
  }
  .grid4 {
    grid-column: 1 / 6;
    grid-row: 4 ;
  }
`;

const StyledCategory = styled.p`
  font-size: 18px;
`;

const StyledName = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 0rem 0rem 2rem 4rem;
`;

const StyledTags = styled.p`
  padding: 0.2rem;
  font-size: 12px;
  background: white;
  border-radius: 1rem;
`;

const StyledInfo = styled.p`
  font-size: 14px;
  background: var(--primary);
  line-height: 1.4rem;
  padding: 0.6rem;
`;

const StyledButton = styled.button`
  width: 90%;
  margin-top: 1rem;
  background: var(--secondary);
  padding: 0.8rem;
  border-radius: 1rem;
  border: 2px solid white;
  color: var(--primary);
  font-family: "Courgette", cursive;
  font-size: 16px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  border: 2px solid white;
  margin: 2rem 0rem 0rem 0rem;
  box-shadow: 0.4rem 0.3rem 0.4rem var(--third);
`;

const StyledProfil = styled.img`
  width: 10vh;
  margin: 0rem 4rem 0rem 0rem;
  background: var(--secondary);
  border-radius: 2rem;
  border: 2px solid white;
  box-shadow: 0.1rem 0.2rem 0.2rem var(--third);
`;
