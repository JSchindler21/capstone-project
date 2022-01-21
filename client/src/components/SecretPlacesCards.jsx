
import styled from "styled-components";

function SecretPlacesCards({country, category, name, info, tags, img}){ 
  
    return(
        <CardContainer>
          <div >
            <h3>{country}</h3>
            <p>{category}</p>
            <p>{name}</p>
            <p>{info}</p> 
            <p>{tags}</p>
            <img scr={img} />
          </div>
        
      </CardContainer>
    )
}

export default SecretPlacesCards; 

const CardContainer = styled.div`
    background: var(--primary)
`