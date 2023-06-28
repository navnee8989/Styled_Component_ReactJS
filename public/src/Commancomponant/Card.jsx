// import ""; 
import React from "react";
// import Image from "../Assets/building-102840.jpg"
import styled from "styled-components";
import Image_path from "../Assets/Image_path";


const Section = styled.div`
    
`;
const CardContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  /* height: 100vh; */
  padding-top: 10px;
  justify-content: space-between;



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Data = styled.div`
      display: flex;
      height: 90vh;
      background-image: linear-gradient(45deg,#d1edcc,#edccdd);
      justify-content: center;
      align-items: center;
      h1{
        font-family: serif;
        font-size: 50px;
        color: red;
        text-align: center;
        font-weight: 500;
        &:hover{
          opacity: 0.7;
        }
      }
      p{
        text-align: center;
        font-family: sans-serif;
      }
`;



function Card() {

        
  return (
    <>
    <Section>
    <Data>  
        <div>
         
       
            <h1>Styled Componant</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur?</p>
          </div>
          </Data>
    </Section>

    </>
  );
}

export default Card;
