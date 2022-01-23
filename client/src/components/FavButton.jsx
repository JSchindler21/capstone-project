import styled from "styled-components";

function FavButton({ onAddToFav, favCards, trip, 

}){
return(
    <FavIcon onClick={() => onAddToFav(trip)}>{favCards.some(
        (favourite) => favourite.id === trip.id)
        ? '🌕'
        : '🌎'}
      </FavIcon>
)
}

export default FavButton; 

const FavIcon = styled.span`
  position: absolute;
  margin: -0.9rem 6rem;
  width: 2.2rem;
  
`;