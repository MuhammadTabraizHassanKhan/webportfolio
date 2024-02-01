import { Box, Container, Grid,Link,Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Maintxt from "../../Maintxt";
import Paragraph from '../../Paragraph';
import { Blackbg, Img, Purplediv } from '../../../Styles/Maintext.styles';
import Regtxt from '../../Regtxt';
import G from "../../../../assets/Images/google.png";
import D from "../../../../assets/Images/discord.png";
import Y from "../../../../assets/Images/yahoo.png";
import I from "../../../../assets/Images/instagram.png";
import X from "../../../../assets/Images/x.png";
import W from "../../../../assets/Images/whatsapp.png";
import A from "../../../../assets/Images/apple.png";
import F from "../../../../assets/Images/facebook.png";
import T from "../../../../assets/Images/telegram.png";
import {motion} from 'framer-motion';

const MotionPurplediv = motion(Purplediv);
const MotionBox = motion(Box);
const Purple = () => {
    return (
        <Blackbg noht>
            <Container maxWidth="xl" sx={{paddingTop:"50px", paddingBottom:"20px"}}>
                <MotionPurplediv initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}}>
                    <Regtxt textAlign="center" my="0px">Virtual Numbers For Over</Regtxt>
                    <Maintxt textAlign="center" my="0px" sx={{fontSize:{xs:"25px"}}}>700 WEBSITES</Maintxt>
                    <MotionBox initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} display="flex" flexWrap="wrap" gap={2} justifyContent="center" marginTop={3}>
                        <Img src={G} w="148px" h="55px" />
                        <Img src={D} w="206px"  h="55px"/>
                        <Img src={Y} w="175px"   h="55px"/>
                        <Img src={I} w="186px"  h="55px"/>
                    </MotionBox>
                    <MotionBox initial={{y:"100%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} display="flex" flexWrap="wrap" gap={2} justifyContent="center" marginTop={3}>
                        <Img src={X} w="68px" h="55px" />
                        <Img src={W} w="178px" h="55px" />
                        <Img src={A} w="152px" h="55px"/>
                        <Img src={F} w="213px" h="55px"/>
                        <Img src={T} w="161px" h="55px"/>
                    </MotionBox>
                    <Paragraph textAlign="center">and more......</Paragraph>
                </MotionPurplediv>
            </Container> 
        </Blackbg>
    );
}
 
export default Purple;