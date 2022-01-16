import { NavLink } from "react-router-dom";

const FooterNavbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="expensetracker"> ExpenseTracker</NavLink>
        <NavLink to="secretplaces">SecretPlaces</NavLink>
        <NavLink to="myprofil">MyProfil</NavLink>
        <NavLink to="favourites">Favourites</NavLink>
      </nav>
    </div>
  );
};

export default FooterNavbar;
