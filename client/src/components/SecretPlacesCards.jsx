import styled from "styled-components";
import { useState } from "react";

import a_globe from "../images/globe_active.svg";
import i_globe from "../images/globe_inactive.svg";
import trash from "../images/trash.svg";

function SecretPlacesCards({
  country,
  category,
  name,
  tags,
  info,
  urlImg,
  imgUrl,
  isFavourite,
  onAddToFavourites,
  trip,
  ownCard,
  onRemove,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <CardContainer>
        <div className="grid0">
          {!ownCard && (
            <FavIcon
              src={isFavourite ? a_globe : i_globe}
              onClick={() => onAddToFavourites(trip)}
            ></FavIcon>
          )}
        </div>

        <div className="grid1">
          <h3>{country}</h3>
          <StyledCategory>Category: {category}</StyledCategory>
        </div>

        <div className="grid2">
          <StyledProfil src={urlImg} alt="Foto" />
          <StyledName>{name}</StyledName>
          <StyledTags>{tags}</StyledTags>
        </div>

        <div className="grid3">
          <StyledImg src={imgUrl} alt="Foto" />
        </div>

        <div className="grid4">
          <StyledButton onClick={handleClick}>show more Info</StyledButton>
          {isVisible ? null : <StyledInfo>{info}</StyledInfo>}
        </div>

        {ownCard && (
          <DelButton onClick={() => onRemove(trip._id)}>
            <img src={trash} alt="trash" />
          </DelButton>
        )}
      </CardContainer>
    </>
  );
}

export default SecretPlacesCards;

const CardContainer = styled.div`
width: 88%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0fr 1fr;
  color: var(--secondary);
  background: var(--primary);
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid var(--secondary);
  box-shadow: 1rem 1.2rem 1.2rem var(--third);
  h3 {
    color: black;
    font-size: 25px;
  }
  .grid0 {
    grid-column: 5;
    grid-row: 1;
  }

  .grid1 {
    grid-column: 1 / 6;
    grid-row: 1;
  }

  .grid2 {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  .grid3 {
    grid-column: 2 / 6;
    grid-row: 2;
  }
  .grid4 {
    grid-column: 1 / 6;
    grid-row: 3;
  }
`;

const StyledCategory = styled.p`
  font-size: 18px;
`;

const StyledName = styled.p`
  text-align: left;
  font-size: 16px;
  margin: 0rem 0rem 2rem 3rem;
`;

const StyledTags = styled.p`
  padding: 0.2rem;
  font-size: 12px;
  background: white;
  border-radius: 1rem;
`;

const StyledInfo = styled.p`
  font-size: 14px;
  background: var(--primary);
  line-height: 1.4rem;
  padding: 0.6rem;
`;

const StyledButton = styled.button`
  width: 90%;
  margin-top: 1rem;
  background: var(--secondary);
  padding: 0.8rem;
  border-radius: 1rem;
  border: 2px solid white;
  color: var(--primary);
  font-family: "Klee One", cursive;
  font-size: 16px;
  cursor: pointer;
`;

const FavIcon = styled.img`
  width: 2rem;
  cursor: pointer;
  background: white;
  border-radius: 1rem;
  margin: -5rem 0rem 2rem 1rem;
`;

const StyledImg = styled.img`
  width: 90%;
  border: 2px solid white;
  margin: 1rem 0rem 0rem 0.5rem;
  box-shadow: 0.4rem 0.3rem 0.4rem var(--third);
`;

const StyledProfil = styled.img`
  width: 8vh;
  margin: 0rem 4rem 0rem 0rem;
  background: var(--secondary);
  border-radius: 2rem;
  border: 2px solid white;
  box-shadow: 0.1rem 0.2rem 0.2rem var(--third);
`;

const DelButton = styled.button`
  position: absolute;
  right: 0.5rem; 
  bottom: 0.5rem; 
  background: none;
  padding: 0.2rem;
  border: 2px solid white;
  cursor: pointer;
`;
