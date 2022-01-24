import styled from "styled-components";
import { useState } from "react";

function SecretPlacesCards({
  country,
  category,
  name,
  tags,
  info,
  imgUrl,
  isFavourite,
  onAddToFavourites,
  trip,
}) {
  const [show, setShow] = useState(true);

  return (
    <>
      <CardContainer>
        <div>
          <FavIcon onClick={() => onAddToFavourites(trip)}>
            {isFavourite ? "🌎" : "🌕"}
          </FavIcon>
          <h3>{country}</h3>
          <StyledCategory>Category: {category}</StyledCategory>
          <StyledName>User:{name}</StyledName>
          <StyledImg src={imgUrl} alt="Foto" />
          <StyledTags>#{tags}</StyledTags>
          <StyledButton onClick={() => setShow((info) => !info)}>
            show information
          </StyledButton>
          <StyledInfo style={{ visibility: show ? "hidden" : "visible" }}>
            {info}
          </StyledInfo>
        </div>
      </CardContainer>
    </>
  );
}

export default SecretPlacesCards;

const CardContainer = styled.div`
  display: grid; 
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  background: var(--primary);
  margin: 1rem 0rem;
  padding: 2rem;
  border-radius: 0rem 2rem;
  h3 {
    margin: 1rem;
  }
`;

const StyledCategory = styled.p``;

const StyledName = styled.p`
 
`;

const StyledTags = styled.p`
  text-align: center;
  font-size: 14px;
  background: white;
  border-radius: 1rem;
 
`;

const StyledInfo = styled.p`
  font-size: 12px;
  background: var(--primary);
  margin: 0.2rem -1rem;
  padding: 1rem;
  border-radius: 2rem;
`;

const StyledButton = styled.button`
  
  background: var(--secondary);
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid white;
  color: var(--primary);
  font-family: "Courgette", cursive;
  font-size: 16px;
  cursor: pointer;
`;

const FavIcon = styled.span`

  font-size: 1.5rem;
`;

const StyledImg = styled.img`
  width: 9rem;
  border: 2px solid white;

`;
