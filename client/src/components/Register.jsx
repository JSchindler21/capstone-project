import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("New user registrated");
      navigate("/account");
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { regData } = await axios.post(
          "http://localhost:3000/api/user",
          {
            email,
            name,
            password,
          },
          config
        );
        console.log(regData);
        localStorage.setItem("userInfo", JSON.stringify(regData));
      } catch (error) {
        alert("Oops, something is wrong! " + error.message);
      }
    }
  };

  return (
    <div>
      <div>
      <StyledContainer>
      <header>Account</header>
        {/*   {error && } */}
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
         
          <label>Name</label>
          <input
            required
            type="name"
            placeholder="enter your Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
           <label>E-Mail</label>
          <input
            required
            type="email"
            placeholder="enter your Email.."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="enter password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            required
            type="password"
            placeholder="confirm password..."
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button>Register</button>
        </form>
        <NavLink to="/account">
          <button>go Back </button>
        </NavLink>
         </StyledContainer>
      <FooterNavbar />
      </div>
    </div>
  );
}

export default Register; 

const StyledContainer = styled.div`
  margin: 2rem;
  text-align: center;

form{
  margin: 1rem auto; 
  display: flex;
  width: 90%; 
  flex-wrap: wrap; 
  flex-direction: column;
}
  label {
    margin-top: 1rem;
  }

  input {
    margin: 0.5rem;
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
  p{
    margin-top: 3rem; 
    font-size: 12px;
  }

  button{
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 14px;
  color: var(--secondary);
  background: var(--primary);
  border: 0.13rem solid var(--secondary);
  font-family: "Courgette";
  cursor: pointer;
}

`;