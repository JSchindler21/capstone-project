import { useState } from "react";
import styled from "styled-components";

import FooterNavbar from "../components/FooterNavbar";
import LoginForm from "../components/LoginForm";


function MyProfil(){
 
  const adminUser = {
    email: "max@müller.de",
    password: "max",

  }

const [user, setUser] = useState({name: "", email: ""})
const [error, setError] = useState("")

const Login = details => {
  console.log(details)

  if(details.email == adminUser.email && details.password == adminUser.password){ 
  console.log("Logged in")
  setUser({
    name: details.name,
    email:details.email
  })
} else {
  console.log("Details do not match")
  setError("Details do not match!")
}
}


const Logout = () => {
  setUser({name: "", email: ""})
}

  return (
    <div>
      <StyledContainer>
        <header>My Profil</header>
        {(user.email != "") ? (
          <div>
            <h2>Welcome, <span>{user.name}</span>
            <button onClick={Logout}>Logout</button>
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
