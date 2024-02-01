import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { Absimg, Blackbg, Blackdiv, HoverGrid, Img, Purplediv, StyledTypographyText } from '../../../Styles/Maintext.styles';
import styled from '@emotion/styled';
import Maintxt from '../../Maintxt';
import Paragraph from '../../Paragraph';
import Buttontrans from '../../Buttontrans';
import Mediumtxt from '../../Mediumtxt';
import Purplebg2 from "../../../../assets/Images/purple2.png"; 
import Mobpic from "../../../../assets/Images/Mobeth.png";
import Doubletxt from '../../Doubletxt';
import TwitterIcon from "../../../../assets/Images/Twitter.png";
import SendIcon from "../../../../assets/Images/Send.png";
import BarIcon from "../../../../assets/Images/baricon.png";
import RecIcon from "../../../../assets/Images/recticon.png";
import UniIcon from "../../../../assets/Images/unicorn.png";
// import { StyledButtonLink, StyledList3 } from '../../../Styles/Navbar.styles';
import {motion} from 'framer-motion';
const Motionimg = motion(Absimg)
const MotionCont = motion(Container)

const navLinks = [{title: <img src={BarIcon} alt="bar icon" width={18} height={18}></img>, link:""},{title: <img src={RecIcon} alt="rect icon" width={18} height={18}></img>, link:""},{title: <img src={UniIcon} alt="unicorn icon" width={25} height={25}></img>, link:""},{title: <img src={SendIcon} alt="send icon" width={18} height={18}></img>, link:""},{title: <img src={TwitterIcon} alt="x icon" width={18} height={18}></img>, link:""}];
const Tokenomics = () => {
    return (
        <Blackbg id="tokenomics">
            <Motionimg tp="21%" initial={{x:"50%"}} whileInView={{x:"0%"}} viewport={{once: true}} transition={{duration: 1}} src={Purplebg2} alt="purple pic" />
            <MotionCont maxWidth="xl" initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", paddingBottom:"50px", paddingTop:{xs:"0px", md:"50px"}}}>
                <Maintxt textAlign="center" my="0px" marginBottom={5} sx={{marginTop:{xs:"40px", md:"120px", lg:"200px"}}}>Tokenomics</Maintxt>
                <Img src={Mobpic} alt="mob eth" w="200px" h="48px" />
                <Grid container marginTop="100px" justifyContent="center" gap={2} alignItems="center">
                    <Grid container item md={12} justifyContent="space-evenly">
                        <Doubletxt def1="MobETH" def2="Token Name" />
                        <Doubletxt def1="$MobETH" def2="Token Name" />
                        <Doubletxt def1="Tba" def2="Supply" />
                        <Doubletxt def1="4/4" def2="Buy/Sell Tax" />
                    </Grid>
                    <Grid item md={6} xs={12} borderRadius="16px" px={3} py={1} marginTop={2} sx={{background:"linear-gradient(180deg,#424242 0.00%,#0d0d0d 100.00%)"}}>
                        <Paragraph fontFamily="Rb" my={1}>4% tax on each buy/sell.</Paragraph>
                        <Paragraph fontFamily="Rr" my={1}>50% for Marketing<br/>50% into liquidity</Paragraph>
                    </Grid>
                    <Grid item md={6} xs={12} borderRadius="10px" display="flex" justifyContent="space-between" px={3} py={1} sx={{background:"linear-gradient(180deg, #6b17ff 0.00%, #360c80 100.00%)"}}>
                        <Paragraph fontFamily="RSb" my="0px">Contract address:</Paragraph>
                        <Paragraph fontFamily="RSb" my="0px">Tba</Paragraph>
                    </Grid>
                    <Grid item  xs={12} md={6} display="flex" justifyContent="space-between" sx={{flexDirection:{xs:"column",md:"row"}, alignItems:{xs:"center", md:"normal"}}}>
                        <Paragraph fontFamily="PopR">Find us on</Paragraph>
                        {/* <StyledList3 sx={{display:"flex"}}>  
                            {navLinks.map((item) => (
                                <Link href= {item.link} underline='none' color="inherit" key={item.title}>
                                    <StyledButtonLink >
                                        {item.title}
                                    </StyledButtonLink>
                                </Link>
                            ))}
                        </StyledList3> */}
                    </Grid>
                </Grid>
            </MotionCont>
            
        </Blackbg>
    );
}
 
export default Tokenomics;