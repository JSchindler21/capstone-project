import { NavLink } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "../images/homepage.svg"
import ExpenseTrackerIcon from "../images/expensetracker.svg"
import SecretPlacesIcon from "../images/place.svg"
import MyProfilIcon from "../images/profile.svg"
import FavouritesIcon from "../images/earth+.svg"


const FooterNavbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="home"> Home
          <img scr={HomeIcon} />
        </NavLink>
        <NavLink to="expensetracker">
        <img scr={ExpenseTrackerIcon} />
        </NavLink>
        <NavLink to="secretplaces">
        <img scr={SecretPlacesIcon} />
        </NavLink>
        <NavLink to="myprofil">
        <img scr={MyProfilIcon} />
        </NavLink>
        <NavLink to="favourites">
        <img scr={FavouritesIcon} />
        </NavLink>
      </nav>
    </div>
  );
};

export default FooterNavbar;


