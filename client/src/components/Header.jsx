import LogoMaennchen from "../images/LogoMaennchen3.svg"
import styled from "styled-components";

const Header = () => {
  return (
    <div>
       <Img src={LogoMaennchen} alt="fav" />
    </div>
  )
};

export default Header;

const Img = styled.img`
width: 18rem; 
margin: -0rem -2rem -1rem 0rem;
`;
