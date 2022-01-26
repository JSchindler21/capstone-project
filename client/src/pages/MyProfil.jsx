import { useState } from "react";
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import LoginForm from "../components/LoginForm";


function MyProfil(){
 
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",

  }

const [user, setUser] = useState({name: " ", email: " "})
const [error, setError] = useState("")

const Login = details => {
  console.log(details)
}

const Logout = () => {
  console.log("Logout")
}

  return (
    <div>
      <StyledContainer>
        <header>My Profil</header>
        {(user.email != "") ? (
          <div>
            <h2>Welcome, <span>{user.name}</span>
            <button>Logout</button>
            </h2>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
        ) } 
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default MyProfil;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;
