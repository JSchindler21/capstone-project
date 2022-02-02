import { useState } from "react";
import styled from "styled-components";

import isTripValid from "../lib/validation";

function NewTripForm({ onAddTrip }) {
  const tripDetails = {
    country: "",
    category: "",
    name: "",
    urlImg: "",
    info: "",
    tags: [],
    imgUrl: "",
  };
  const [trip, setTrip] = useState(tripDetails);
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [hasFormSend, setHasFormSend] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setTrip({ ...trip, [event.target.name]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isTripValid(trip)) {
      onAddTrip(trip);
      setHasFormErrors(false);
      setHasFormSend(true);
    } else {
      setHasFormErrors(true);
      setHasFormSend(false);
    }
  };

  return (
    <div>
      {hasFormErrors && (
        <Errormessage> please fill out all input fields ! </Errormessage>
      )}

      {hasFormSend && (
        <Errormessage> Cool, dein Trip ist nun dabei ! </Errormessage>
      )}

      <StyledForm onSubmit={handleSubmit}>
        <h3 className="gridheadline">Add your own Travel Inspiration </h3>

        <label className="gridleft" name="country">
          Which place would you like to recommend ?
        </label>
        <input
          className="gridright"
          type="text"
          name="country"
          id="country"
          placeholder="please enter your places..."
          onChange={handleChange}
          value={trip.country}
        />
        <label name="category">Catergory:</label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={trip.category}
        >
          <option className="colorGrey" value="choose">
            Choose Categorys...
          </option>
          <option value="Nature">Nature</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Attractions">Attractions</option>
        </select>

        <label name="photo">Profil Photo:</label>
        <input
          type="UrlImg"
          name="urlImg"
          id="urlImg"
          placeholder=" Enter your picture..."
          onChange={handleChange}
          value={trip.urlImg}
        />

        <label name="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Enter your Username..."
          onChange={handleChange}
          value={trip.name}
        />

        <label name="info">
          We need Informations about your places! What is so special about it?
        </label>
        <textarea
          type="textarea"
          rows="10"
          cols="30"
          name="info"
          id="info"
          placeholder=" Enter your Information..."
          onChange={handleChange}
          value={trip.info}
        />

        <label name="tags">#Tags:</label>
        <input
          label=""
          name="tags"
          id="tags"
          placeholder=" Enter your tags with #..."
          onChange={handleChange}
          value={trip.tags}
        />

        <label name="name">Inspiration Photo:</label>
        <input
          type="imgUrl"
          name="imgUrl"
          id="imgUrl"
          placeholder=" Enter your image Url..."
          onChange={handleChange}
          value={trip.imgUrl}
        />
        <button className="gridbutton">Add New Trip</button>
      </StyledForm>
    </div>
  );
}

export default NewTripForm;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 40%  60%;
  gap: 0.6rem;
  margin: auto; 
  padding: 1rem; 
  font-size: 13px;

  label {
   margin: 0.2rem; 
    text-align: left;
  }
  .gridheadline{
    grid-column: 1 / 3;
    grid-row: 1;
    font-size: 18px;
    margin: 1rem;
   
  }
  .gridleft{
    grid-column: 1 / 2 ;
    grid-row: 2;
    
  }
  .gridright{
    grid-column: 2 /3;
    grid-row: 2;
    
}
.gridbutton{
    grid-column: 1/3;
    grid-row: 9;
    
}

  input {
    margin: 0.2rem;
    color: #050505;
    text-align: left;
    font-size: 12px;
    font-family: "Courgette";
    border-radius: 0.5rem;
    border: 2px solid var(--secondary);
    background: var(--primary);
    padding: 0.5rem;
    -moz-appearance: textfield;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  select {
    margin: 0.2rem 0.2rem 0rem 0.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 12px;
    background: var(--primary);
    border: 0.15rem solid var(--secondary);
    font-family: "Courgette";
    cursor: pointer;

  }
 
  }
  textarea {
    color: black;
    text-align: left;
    font-size: 12px;
    font-family: "Courgette";
    border-radius: 0.5rem;
    border: 2px solid var(--secondary);
    background: var(--primary);
    padding: 0.4rem;
    margin: 0.1rem;
  }
  button {
    margin: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 14px;
    color: var(--secondary);
    background: var(--primary);
    border: 0.15rem solid var(--secondary);
    font-family: "Courgette";
    cursor: pointer;
  }
`;

const Errormessage = styled.div`
font-size: 14px; 
color: #570b0b; 
margin-top: 1rem; 
`;
