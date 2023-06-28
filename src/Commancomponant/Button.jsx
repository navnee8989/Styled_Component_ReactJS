import styled, { css } from "styled-components";

const Button = styled.button`
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  border-radius:20px;
  background: rgb(255,27,0);
background: linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%);

&:hover {
  color: black;
  font-family:sens-sarif;
  background: transparent;
   box-shadow:none;
   border:1px solid black;
}

`
export default Button;