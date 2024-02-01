import React from 'react';
import { Blackbg } from '../../../Styles/Maintext.styles';
import {Container } from '@mui/material';
import styled from '@emotion/styled';
import AccordianDesign from '../../AccordianDesign';
import Maintxt from '../../Maintxt';
import {motion} from 'framer-motion';

const Motioncont = motion(Container)

const Faq = () => {
    return (
            <Blackbg noht noclr id="faq">
                <Motioncont  initial={{y:"20%"}} whileInView={{y:"0%"}} viewport={{once: true}} transition={{duration: 1}} sx={{paddingTop:"50px", paddingBottom:"50px"}}>
                    <Maintxt textAlign="center">Frequently Asked Questions</Maintxt>
                    <AccordianDesign def1="How does MobETH ensure the security of contact numbers?" def2="MobETH employs state-of-the-art encryption technologies to fortify the privacy of contact numbers. Our robust security protocols set a new standard, ensuring that user information remains shielded from unauthorized access and potential breaches." ></AccordianDesign>
                    <AccordianDesign def1="Can I use MobETH for global outreach?" def2="Absolutely. MobETH is designed to facilitate global outreach, supporting users in over 180 countries. Our commitment to worldwide expansion ensures that individuals and businesses can seamlessly connect and engage across diverse regions."></AccordianDesign>
                    <AccordianDesign def1="Is payment on MobETH limited to MobETH or Ethereum only?" def2="Yes, MobETH exclusively accepts payments in MobETH and Ethereum. Our streamlined payment system ensures a secure and efficient transaction process for users utilizing these two cryptocurrencies. This approach enhances simplicity and aligns with our commitment to embracing digital currencies in the MobETH ecosystem."></AccordianDesign>
                </Motioncont>
            </Blackbg>
    );
}
 
export default Faq;