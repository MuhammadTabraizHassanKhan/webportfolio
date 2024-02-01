import React from 'react';
import Navbar from '../../Navbar';
import  { Container, Grid} from '@mui/material';
import MainBg from "../../../../assets/Images/mainbg.mp4";
import styled from '@emotion/styled';
import Maintxt from '../../Maintxt';
import Regtxt from '../../Regtxt';
import Paragraph from '../../Paragraph';
import PurpleButton from '../../PurpleButton';
import {motion} from 'framer-motion';

const MotionGrid = motion(Grid);


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
const Anontxtimg= styled.img`
  width:25%;
  height:auto;
  @media(max-width: 600px){
    width:75%;
  }
  @media(max-width:1440px) and (min-width:901px){
    width:18%;
  }
  @media(min-width: 2560px){
    width:50%;
  }

`

const Home = () => {
  return (
    <HeaderDesign>
      <MotionVid initial={{y:"50%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={MainBg} alt="videobg" muted autoPlay loop />
      <Navbar /> 
      <Container maxWidth="xl"  sx={{ height:"calc(100vh - 84px)" ,display:"flex", flexDirection:"column", justifyContent:"center", marginTop:{xs:"15%",md:"5%"}}}>
      <Grid container>
          <MotionGrid item initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} md={6} xs={12} display="flex" flexDirection="column" alignItems="flex-start">
            <Maintxt my="0px">Your Privacy, Our Expertise</Maintxt>
            <Regtxt my="0px">Leading the Pack in Providing<br/>Virtual Numbers.</Regtxt>
            <Paragraph sx={{marginRight:{xs:"0px",sm:"400px", md:"200px", lg:"287px", xl:"420px"}}}>Empower your digital presence with MobETH, the all-in-one solution for global privacy, scalable verification, seamless payments, and effortless accessibility on the Ethereum network.</Paragraph>
            <PurpleButton>Launch App</PurpleButton>
          </MotionGrid>
        </Grid>
      </Container>
    </HeaderDesign>
  );
}
 
export default Home;