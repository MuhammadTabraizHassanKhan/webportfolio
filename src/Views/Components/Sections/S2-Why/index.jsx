import React from 'react';
import {Absimg, Blackbg, Img, MidsectionBlack } from '../../../Styles/Maintext.styles';
import Textpic from "../../../../assets/Images/Mixss.png";
//import Marquee from "react-fast-marquee";
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import Purplebg from "../../../../assets/Images/purple1.png"; 
import Maintxt from '../../Maintxt';
import Pic1 from "../../../../assets/Images/pic1.png";
import Mediumtxt from '../../Mediumtxt';
import Paragraph from '../../Paragraph';
import Pic2 from "../../../../assets/Images/pic2.png";
import Pic3 from "../../../../assets/Images/pic3.png";
import Pic4 from "../../../../assets/Images/pic4.png";
import Cardimg from '../../Cardimg';
import {motion} from 'framer-motion';
const Motionimg = motion(Absimg)
const MotionCont = motion(Container)
const Why = () => {
    return (
        <Blackbg id="why">
            <Motionimg initial={{x:"-100%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Purplebg} alt="purple pic" />
            <MotionCont  maxWidth="lg" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"100px",paddingTop:{xs:"0px", md:"50px"} }}>
                <Maintxt my={8}>Why Choose MobETH?</Maintxt>
                <Grid container spacing={3} alignItems="start" justifyContent="center">
                    <Grid container item alignItems="flex-start" md={6} gap={5}>
                        <Cardimg psrc={Pic1} def1="Global Outreach" def2="Unlock global possibilities with MobETH's extensive outreach, serving users globally. Our commitment to worldwide expansion ensures a borderless experience, connecting individuals and businesses across diverse regions." />
                        <Cardimg psrc={Pic2} def1="Scalable" def2="MobETH sets the benchmark for scalability, efficiently processing thousands of verifications per second while maintaining consistent and affordable fees for our users. Join a platform that effortlessly scales to meet the demands of a dynamic digital landscape." />
                    </Grid>
                    <Grid container alignItems="flex-start" item md={6} gap={5}>
                        <Cardimg ptop="150px" psrc={Pic3}  def1="Ease of Access" def2="Experience a new level of accessibility with MobETH, whether for personal use or business needs, our service provides seamless access, making online interactions hassle-free." />
                        <Cardimg psrc={Pic4} def1="Seamless Payments" def2="MobETH streamlines your experience with effortless funding options. Replenish your account seamlessly using a variety of payment methods, including e-wallets, bank cards, or cryptocurrencies. Enjoy the convenience of managing your payments with simplicity and ease." />
                    </Grid>
                </Grid>
            </MotionCont>
        </Blackbg>
           
    );
}
 
export default Why;