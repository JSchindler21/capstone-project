import  {useState}  from 'react';
import styled from "styled-components";

import isTripValid from '../lib/validation';



function NewTripForm({ onAddTrip }) {
  const tripDetails = {
    country: '',
    category: '',
    name: '',
    urlImg: '',
    info: '',
    tags: [],
    imgUrl: '',
  };
  const [trip, setTrip] = useState(tripDetails);
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [hasFormSend, setHasFormSend] = useState(false)

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setTrip({...trip, [event.target.name]: inputValue, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isTripValid(trip)) {
      onAddTrip(trip);
      setHasFormErrors(false);
      setHasFormSend(true)
    } else {
      setHasFormErrors(true);
      setHasFormSend(false)
    }
  };



  return (
    <div>
      <header>Account</header>


      {hasFormErrors && (
      <Errormessage> Bitte Eingaben kontrollieren!  </Errormessage> )}

      {hasFormSend && (
      <Errormessage> Cool, dein Trip ist nun dabei ! </Errormessage> )}

      <StyledForm onSubmit={handleSubmit} >

      <h3>Add new Trip Ideas</h3>

        <label name="country">Which place would you like to recommend ?</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="please enter your places..."
          onChange={handleChange}
          value={trip.country}
        />
        <label name="tags">Catergory:</label>
        <select name="category" id="" onChange={handleChange} value={trip.category}>
          <option value="choose">Choose Categorys...</option>
          <option value="nature">Nature</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Attractions">Attractions</option>
        </select>

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

        <label name="name">Your Photo:</label>
        <input
          type="url"
          name="imgUrl"
          id="imgUrl"
          placeholder=" Enter your image Url..."
          onChange={handleChange}
          value={trip.url}
        />
        <button onClick={handleSubmit} >Add New Trip</button>
      </StyledForm>

      {/* {trip.map((trip, index) => (
        <div key={index}>
          <h2>{trip.country}</h2>
          <p>{trip.country}</p>
        </div>
      ))} */}
    </div>
  );
}

export default NewTripForm;


const StyledForm = styled.form`
display: flex; 
flex-wrap: wrap; 
flex-direction: column; 
width: 90%; 
padding: 1rem; 

font-size: 14px; 
text-align: center; 

  label{
    margin-top: 1rem; 
  }

  input{
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

select{
  margin: 0.2rem 0.2rem 0rem 0.2rem; 
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 12px;
  color: var(--secondary);
  background: var(--primary);
  border: 0.15rem solid var(--secondary);
  font-family: "Courgette";
  cursor: pointer;
}

textarea{
  color: black;
  text-align: left;
  font-size: 12px;
  font-family: "Courgette";
  border-radius: 0.5rem;
  border: 2px solid var(--secondary);
  background: var(--primary);
  padding: 1rem;
  margin: 0.2rem; 
  
}
button{
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 14px;
  color: var(--secondary);
  background: var(--primary);
  border: 0.2rem solid var(--secondary);
  font-family: "Courgette";
  cursor: pointer;
}
`;

const Errormessage = styled.span` 

`; 