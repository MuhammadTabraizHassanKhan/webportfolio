import { Button, } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';


const StyledButton = styled(Button)`
text-transform: none;
color: white;
font-family: "PopSb";
min-width: 130px;
min-height: 35px;
border-radius: 8px;
font-size:14px;
padding:2px 10px;
background: linear-gradient(180deg, #6b17ff 0.00%, #360c80 100.00%);
&:hover{
  background-color: #6b17ff;
  color: white;
}
@media(max-width: 599px){
        font-size: 16px;

    }
`


const PurpleButton = (props) => {
  return ( 
    <StyledButton {...props} > {props.children} </StyledButton>
  );
}
 
export default PurpleButton;