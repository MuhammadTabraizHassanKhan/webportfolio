import React from 'react';
import { Blackbg, Img } from '../../../Styles/Maintext.styles';
import { Box, Typography } from '@mui/material';
import MainIcon from "../../../../assets/Images/MainIcon.png";
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import MainBg from "../../../../assets/Images/loaderbg.mp4";



const HeaderDesign = styled.div`
  min-height: 110vh;
  position: relative;
  z-index: 2;
  /* scroll-snap-align:start; */
  overflow: hidden;
  @media(max-width: 900px){
    min-height: 100vh;
  }
  
`
const Backvideo = styled.video`
  position: absolute;
  width: 100%;
  object-fit:cover;
  top: 0%;
  left: 0%;
  z-index: -1;
  min-height: 100vh;

`
const MotionVid = motion(Backvideo);

const Loader = () => {
    return (
        <HeaderDesign>
            <MotionVid initial={{x:"100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={MainBg} alt="videobg" muted autoPlay loop />
            <Box gap={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="100vh" sx={{animation:"Blink 4s ease infinite"}}>
                <Typography variant="h4" color="white" fontFamily="Rb">Tabraiz Hassan</Typography>
            </Box>
        </HeaderDesign>
      );
}
 
export default Loader;