import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  useEffect(() => {
    const infoData = localStorage.getItem("infoData");
    if (infoData) {
      navigate("/account");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { loginData } = await axios.post(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        },
        config
      );
      if (loginData.token && loginData.token !== "") {
        localStorage.setItem("infoData", JSON.stringify(loginData));
        navigate("/account");
      } else {
        throw new Error("authentication wrong.");
      }
    } catch (error) {
      alert("email or password wrong" + error.message);
    }
  };

  return (
    <div>
      <StyledContainer>
        <header>Account</header>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label>E-Mail</label>
          <input
            required
            type="email"
            placeholder="enter your Email..."
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
          <NavLink to="/myprofil">
            <button>Login </button>
          </NavLink>

          <p>noch nicht angemeldet? 
            </p>
          <NavLink to="/register">
            <button>Sign up </button>
          </NavLink>
        </form>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
}

export default Account;

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
  p{
    margin-top: 3rem; 
    font-size: 12px;
  }

  button{
  margin-top: 0.5rem;
  width: 60%; 
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
