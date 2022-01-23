import styled from "styled-components";
import globe_a from "../images/globe_active.svg"
import globe_i from "../images/globe_inactive.svg"

function SecretPlacesCards({
  country,
  category,
  name,
  tags,
  info,
  img,
  // onAddToFav,
  // favCards,
  // trip,
}) {
  return (
    <CardContainer>
      <div>
    

        {/* <FavIcon
          src={favCards(trip) ? globe_a : globe_i}
          alt='Fave Icon'
          onClick={() => onAddToFav(trip)}
        /> */}
        <h3>{country}</h3>
        <p>{category}</p>
        <StyledText>{name}</StyledText>
        <StyledText>#{tags}</StyledText>
        <StyledText>{info}</StyledText>
        <img src={img} />
      </div>
    </CardContainer>
  );
}

export default SecretPlacesCards;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  background: var(--primary);
  padding: 1rem;
  margin: 1rem;
  border-radius: 0rem 2rem;
`;


const StyledText = styled.p`
  text-align: left;
  margin-left: -4rem;
  font-size: 14px;
`;

const FavIcon = styled.img`
  
`;