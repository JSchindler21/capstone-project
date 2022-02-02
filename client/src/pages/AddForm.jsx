import styled from "styled-components";

import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";

const AddForm = () => {
  return (
    <div>
       
      <StyledContainer>
        <h1>New Trips</h1>
      </StyledContainer>
      <FooterNavbar />
    </div>
  );
};

export default AddForm;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 3rem; 
  text-align: center;
  width: 80%;
  padding-bottom: 4rem; 
`;
