import { Grid } from '@mui/material';
import React from 'react';
import Maintxt from '../Maintxt';
import Paragraph from '../Paragraph';
const Doubletxt = (props) => {
    return (
        <Grid item md={2} xs={6} display="flex" flexDirection="column">
            <Maintxt variant="h5" my="0px">{props.def1}</Maintxt>
            <Paragraph color="#A8A8A8" fontFamily="Rr" my="0px">{props.def2}</Paragraph>
        </Grid>
      );
}
 
export default Doubletxt;