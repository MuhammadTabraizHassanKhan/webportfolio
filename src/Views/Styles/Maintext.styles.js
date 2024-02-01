import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Accordion, Container, Card, Grid } from '@mui/material';

export const Blackbg = styled.div`
    background-color: ${(props) => props.noclr ? "transparent" : "black"};
    overflow: hidden;
    position:relative;
    z-index: 1;
    min-height:  ${(props) => props.noht ? "auto" : "100vh"} ;
    /* scroll-snap-align:start; */

    
`

export const StyledContainer = styled(Container)`
    background-color: ${(props) => props.bgclr ? props.bgclr : "#000000"} ;
    min-height: ${(props) => props.mht ? props.mht : "auto"} ;
    position:relative;
    padding: 0px !important ;
    margin-top:${(props) => props.my ? "100px" : "auto"} ; 
    margin-bottom: "100px"; 
`

export const StyledTypographyText = styled(Typography)`
    font-family: MickirItalicBlack;
    font-size: ${(props) => props.fntsze ? props.fntsze : "62px"} ; 
    line-height: ${(props) => props.lh ? props.lh : "1.3"} ;
    font-weight: bold;
    text-align: ${(props) => props.ta ? props.ta : "left"} ;
    color: ${(props) => props.txtclr ? props.txtclr : "#ffffff"} ;  
    font-font-style: italic;
    @media(max-width:760px){
        font-size:32px;
        line-height: 1;
    }
`

export const StyledAccordian = styled(Accordion)`
    background: linear-gradient(180deg, #424242 0.00%, #0d0d0d 100.00%);
    margin-top: 30px;
    border-radius: 14px !important;
    padding: 10px 5px;
    &:hover{
        background: linear-gradient(180deg, #6b17ff 0.00%, #360c80 100.00%);;
        &>.MuiButtonBase-root
        {
            &>.MuiAccordionSummary-content{
                &>.MuiTypography-root{
                    color:white;   
                }
            }
            &>.MuiAccordionSummary-expandIconWrapper{
                &>.MuiSvgIcon-root{
                    color: white;
                }
            }
        }
        &>.MuiCollapse-root{
            &>.MuiCollapse-wrapper{
                &>.MuiCollapse-wrapperInner{
                    &>.MuiAccordion-region{
                        &>.MuiAccordionDetails-root{
                            &>.MuiTypography-root{
                                color:white;
                            }
                        }
                    }
                }
            }
        }
    }
    &>.MuiButtonBase-root{
        &>.MuiAccordionSummary-content{
            margin-top:5px;
            margin-bottom:5px;
            padding: 4px 10px;
        }
    }
    &>.MuiCollapse-root{
        &>.MuiCollapse-wrapper{
            &>.MuiCollapse-wrapperInner{
                &>.MuiAccordion-region{
                    &>.MuiAccordionDetails-root{
                        &>.MuiTypography-root{
                            padding: 4px 10px;
                        }
                    }
                }
            }
        }
    }   
`

export const MidsectionBlack = styled.div`
    min-height: 15vh;
    background: linear-gradient(180deg,#1b1622 0.00%, #000000 100.00%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:30px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px 0px;
`

export const BlackBox = styled.div`
    background-color: black;
    border-radius:7px;
    width: 122px;
    height:36px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    color: #F9860B;
`

export const OrangeText = styled(Typography)`
    font-size: ${(props) => props.fntsze ? props.fntsze : "20px"};
    font-family: "Mickir";
    color: #f9860b;
    font-weight: bold;
    text-align: left;
`

export const HoverCard = styled(Card)`
    /* @media(max-width:768px ){ 
        margin-top: 50px;
    }*/
`

export const HoverGrid = styled(Grid)`
    border-radius:28px;
    position:relative;
    :hover{
    background-color: #F9860B;
        .dogleft{
            left:-60px;
        }
        .dogtop{
            top:-71px !important;
        }
        .dogright{
            right:-60px !important;
        }
        &>.MuiPaper-root{
            background-color: #F9860B;
            &>.MuiTypography-root{
                color: black;
            }
            &>.hovertext{
                color: #F9860B;
            }
        }
    }
    @media(max-width:768px){ 
        margin-top: 50px;
        :hover{
            .dogleft{
                top:-71px !important;
            }
            .dogtop{
                top:-71px !important;
            }
            .dogright{
                top:-71px !important;
            }
        }
    }
`

export const Purplediv = styled.div`
background: ${(props) => props.bgclr ? props.bgclr : "linear-gradient(180deg, #6b17ff 0.00%, #360c80 100.00%)"};
padding: ${(props) => props.pd ? props.pd : "50px"};
border-radius: ${(props) => props.nobrdr ? "0px" : "6px"};
text-align: center;
overflow: hidden;`


export const Img = styled.img`
width:${(props) => props.w ? props.w : "100%"};
height: ${(props) => props.h ? props.h : "auto"};
padding-top: ${(props) => props.ptop ? props.ptop : "0px"};
`

export const Absimg = styled.img`
position: absolute;
width: 100%;
object-fit:cover;
top: ${(props) => props.tp ? props.tp : "2%"};
left: 0%;
z-index: -1;
/* min-height: 100vh; */
@media(min-width:320px) and (max-width:900px){
    top:0%;
}
@media(min-width:1400px){
    top: 0%;
}
`