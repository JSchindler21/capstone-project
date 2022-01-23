import styled from "styled-components";
import { useState } from "react";

function SecretPlacesCards({ country, category, name, tags, info, imgUrl }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <CardContainer>
        <div>
          <h3>{country}</h3>
          <StyledCategory>Category: {category}</StyledCategory>
          <StyledName>{name}</StyledName>
          {/* <StyledImg src={imgUrl} alt="Foto" /> */}
          <StyledTags>#{tags}</StyledTags>
          <StyledButton onClick={() => setShow((s) => !s)}>
            show describtion
          </StyledButton>
        </div>
      </CardContainer>
      <StyledInfo style={{ visibility: show ? "hidden" : "visible" }}>
        {info}
      </StyledInfo>
    </>
  );
}

export default SecretPlacesCards;

const CardContainer = styled.div`
  position: relative;
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
  position: absolute;
  margin: 1rem 0rem;
`;

const StyledImg = styled.img`
  position: absolute;
  margin: 0rem 5rem;
`;

const StyledTags = styled.p`
  text-align: center;
  font-size: 14px;
  background: white;
  border-radius: 1rem;
  margin: 4rem 2rem 1rem 2rem;
`;

const StyledInfo = styled.p`
 
  font-size: 12px;
  background: var(--primary);
  margin: 0.2rem -1rem;
  padding: 1rem;
  border-radius: 2rem;
`;

const StyledButton = styled.button`
  display: flex;
  background: var(--secondary);
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid white;
  color: var(--primary);
  font-family: "Courgette", cursive;
  font-size: 16px;
`;
