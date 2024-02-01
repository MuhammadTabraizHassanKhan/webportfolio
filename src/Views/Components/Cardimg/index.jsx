import { Box, Grid } from '@mui/material';
import React from 'react';
import { Img } from '../../Styles/Maintext.styles';
import Mediumtxt from '../Mediumtxt';
import Paragraph from '../Paragraph';

const Cardimg = (props) => {
    return (
        <Grid item display="flex" sx={{paddingTop:{xs:"0px", md:props.ptop}}} flexDirection="column" xs={12} position="relative">
            <Img  w="100%" src={props.psrc} alt="pic" />
            <Mediumtxt my={2}>{props.def1}</Mediumtxt>
            <Paragraph my="0px">{props.def2}</Paragraph>   
 
        </Grid>
      );
}
 
export default Cardimg;