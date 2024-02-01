import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 425px){
        font-size: 20px;
    }
`

const Regtxt = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="h5" color="white" fontFamily="Rr"  textAlign="left" fontWeight="normal" my={3} sx={{marginRight:{xs:"0px", md:"10px"}}} {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Regtxt;