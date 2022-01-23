import styled from "styled-components";

function SecretPlacesCards({
  country,
  category,
  name,
  tags,
  info,
  img,
  isFavourite,
  onAddToFavourites,
  trip
}) {
  return (
    <div>
      <CardContainer>
        <section>
          <FavIcon onClick={() => onAddToFavourites(trip)}>
            {isFavourite ? "🌎" : "🌕"}
          </FavIcon>
          <h3>{country}</h3>
          <p>{category}</p>
          <StyledText>{name}</StyledText>
          <StyledText>#{tags}</StyledText>
          <StyledText>{info}</StyledText>
          <img src={img} />
        </section>
      </CardContainer>
    </div>
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
  cursor: pointer; 
`;

const StyledText = styled.p`
  text-align: left;
  margin-left: -4rem;
  font-size: 14px;
  
`;

const FavIcon = styled.span`
position: absolute;
margin: -1.5rem 5rem;
font-size: 1.5rem; 
`;
