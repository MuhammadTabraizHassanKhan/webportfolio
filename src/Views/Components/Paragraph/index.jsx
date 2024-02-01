import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledPara = styled(Typography)`
    @media(max-width: 425px){
        font-size: 14px;
    }
`

const Paragraph = (props) => {
    const {children}=props;
    return (
        <StyledPara variant="subtitle1" color="white" fontFamily="Ral" textAlign="left" fontWeight="normal" my={2} lineHeight={1.3} {...props}>
            {children}
        </StyledPara>
    );
}
 
export default Paragraph;