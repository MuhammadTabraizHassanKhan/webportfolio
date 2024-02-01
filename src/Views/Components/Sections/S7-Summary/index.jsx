import React from 'react';
import { Grid,Link,Container, Divider, Typography } from '@mui/material';
import Paragraph from '../../Paragraph';
import MainIcon from "../../../../assets/Images/MainIcon.png";
import Pinkgreenbg from "../../../../assets/Images/Pinkgreenbg.png";
import TwitterIcon from "../../../../assets/Images/Twitter.png";
import SendIcon from "../../../../assets/Images/Send.png";
import styled from '@emotion/styled';
import Mediumtxt from '../../Mediumtxt';
import { Blackbg } from '../../../Styles/Maintext.styles';
import PurpleButton from '../../PurpleButton';
import Maintxt from '../../Maintxt';

const Bottomdiv = styled.div`
    background-image: url(${Pinkgreenbg});
    background-size: cover;
    z-index: 1;
    background-repeat: no-repeat;
    margin-top: 50px;
`
const DividerStyle = styled(Divider)`
    width:100%;
    height:1px;
    margin-top:20px;
    margin-bottom: 20px;
    z-index: 1;
    background:  linear-gradient(37deg, #9945ff 8.00%, #8752f3 30.00%, #5497d5 50.00%, #43b4ca 60.00%,#28e0b9 72.00%, #19fb9b 97.00%);
`

const MainIconImg2 = styled.img`
  width:35%;
  height:auto;
  @media(max-width: 400px){
    width:30%;
  }
`

const MainIconImgtxt = styled.img`
  width:80%;
  height:auto;
  @media(max-width: 400px){
    width:70%;
  }
`

const WhiteLink = styled(Link)`
    text-decoration-color:  white;
    color:white;
`
const Summary = () => {
    const navLinks = [{title:'Home',link:"/"},{title:'Why Choose MobETH?',link:"#why"}, {title:'Tokenomics',link:"#tokenomics"}, {title:'Frequently Asked Questions', link:"#faq"}];
    return (
        <>
        <Blackbg noht>
            <Container maxWidth="xl" sx={{paddingTop:"100px", paddingBottom:"100px"}}>
                <Grid container justifyContent="space-between" >
                    <Grid item md={6} xs={12} sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"start", marginTop:{xs:"20px", md:"0px"}}}}>                        
                        <Link href="/" underline='none' color="inherit" display="flex" alignItems="center" gap={1}>
                            <MainIconImg2 src={MainIcon} alt="anonsol"/>
                            <Typography variant="h6" color="white" fontFamily="Rr">Mob<Typography variant="h6" component="span" fontFamily="Rb">ETH</Typography></Typography>
                        </Link>
                        <Paragraph color="#A8A8A8" variant="caption" marginTop={2} marginBottom={0} sx={{marginRight:{xs:"0px", md:"260px", lg:"340px"}, textAlign:{xs:"center", md:"start"}}}>
                            Experience a pinnacle in secure and private communication, where cutting-edge technology meets unwavering commitment to safeguarding your digital interactions.
                        </Paragraph>
                        <Paragraph color="#6916F9" variant="caption" fontWeight="bolder" my={2} sx={{textAlign:{xs:"center", md:"start"}}}>
                            info@mobeth.finance
                        </Paragraph>
                        <PurpleButton>Launch App</PurpleButton>  
                    </Grid>
                    <Grid item md={2} xs={12}  sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"start", marginTop:{xs:"20px", md:"0px"}}}}>
                        <Maintxt variant="h6">Quick Links</Maintxt> 
                        {navLinks.map((item) => (
                            <Link href= {item.link} underline='none' color="inherit" key={item.title}>
                                <Paragraph fontFamily="Rr" marginTop="0px" marginBottom="0px" >{item.title}</Paragraph>
                            </Link>
                        ))}
                    </Grid>
                    <Grid container item md={2} xs={12} sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"start"}, marginTop:{xs:"20px", md:"0px"}}}>
                        <Grid item>
                            <Maintxt variant="h6">Socials</Maintxt> 
                        </Grid>
                        <Grid item display="flex" flexDirection="column">
                            <WhiteLink>
                                <Paragraph fontFamily="Rr" my="0px" >X(Twitter)</Paragraph>
                            </WhiteLink>
                            <WhiteLink>
                                <Paragraph fontFamily="Rr"my="0px" >Telegram</Paragraph>
                            </WhiteLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Blackbg>
        </>
    );
}
 
export default Summary;