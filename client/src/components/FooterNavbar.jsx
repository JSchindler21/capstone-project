import { NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "../images/homepage.svg";
import TrackerIcon from "../images/expensetracker.svg";
import PlaceIcon from "../images/place.svg";
import ProfilIcon from "../images/profile.svg";
import FavouritesIcon from "../images/globe_active.svg";

const FooterNavbar = () => {
  return (
    <div>
      <StyledNavbar>
        <NavLink to="/">
          {" "}
          <Img src={HomeIcon} alt="home" />
        </NavLink>
        <NavLink to="/expensetracker" alt="tracker">
          <Img src={TrackerIcon} alt="tracker" />
        </NavLink>
        <NavLink to="/secretplaces">
          <Img src={PlaceIcon} alt="place" />
        </NavLink>
        <NavLink to="/myprofil">
          <Img src={ProfilIcon} alt="profil" />
        </NavLink>
        <NavLink to="/favourites">
          <Img src={FavouritesIcon} alt="fav" />
        </NavLink>
      </StyledNavbar>
    </div>
  );
};

export default FooterNavbar;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--secondary);
  bottom: 0;
  z-index: 99;
  border: 3px solid var(--primary);
 

  .active {
    background: var(--third);
    border-radius: 1rem;
    border: 2px solid white;
  }
`;

const Img = styled.img`
  padding-top: 0.3rem;
  margin: 0.2rem 1rem 0rem 1rem ;
  width: 3.5vh;
  
`;
