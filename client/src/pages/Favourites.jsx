import styled from "styled-components"
import FooterNavbar from "../components/FooterNavbar";

 const Favourites = () => {
    return (
       
            <div>
                 <StyledContainer> 
                <header>Favourites</header>
                </StyledContainer>
                <FooterNavbar />
            </div>
            
        )
    }
    
    export default Favourites; 
    
    const StyledContainer = styled.div`
      display: flex; 
      flex-direction: column;
      margin: 2rem;
      text-align: center;
      padding: 1rem 1rem 4rem 1rem;
    
    `;