import styled from "styled-components";
import background from "../assets/images/worldbg.jpg";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
min-height: 100%;
height: auto !important;
height: 100vh;
width: 100vw;
`
export const Main = styled.div`
border: 1px solid gray;

padding: 2rem;
width: 70vw;
height: 60vh;

z-index: 3;
line-height: 1.5;
display: flex; 

font-size: calc(0.6rem + 1vw);
backdrop-filter:blur(4px);
border-radius: 20px;

position: fixed;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubutntu Mono', monospace;
font-style: italic;
`

export const Background = styled.img`
position: fixed;
background-image:url(${background});
background-size: cover;
background-position:center;
background-attachment: fixed, scroll;
background-repeat: no-repeat, repeat-y;
width: 100%;
height: 100%;
z-index:-10;
`

export const Button = styled.button`
width: 70px;
height: 30px;
position: absolute;
`

export const LeftMain = styled.div`
display: flex;
position: relative;

align-content: center;
width: 40%;
max-width: 100%;
border: 2px dotted red;
float: left;
height: 100%;

`

export const RightMain = styled.div`
display: flex;
position: relative;
float:right;
width: 100%;
border: 2px dotted blue;
height: 100%;
color: #BBA14F;
flex-direction: column;
`

export const ChampionName = styled.h1`
display: flex;
width: 100%;
float: top;
justify-content: center;
margin:0%;
border: 2px solid yellow;
height: 15%;
text-shadow: -1px 0 black, 0 1px white, 1px 0 white, 0 -1px black;
font-size:50px;

`
export const SpellBox = styled.div`
margin: 0%;
display: flex;
height: 30%;
width: 100%;
border: 2px solid red;
justify-content: space-around;
flex-wrap: wrap;
align-items:center;

img{
    width: 70px;
    height: 70px;
}
`

export const PassiveBox = styled.div`
position: relative;
text-align: center;
border: 2px solid purple;
display: flex;



`
export const Ability = styled.div`
position: absolute;
font-size: 17px;
color: black;
right:5px;
bottom: -5px;
`

export const Description = styled.div`
display: flex;
width: 100%;
height:50%;
border: 2px solid green;
flex-direction: column;
gap: 4%;
}
`

export const LoreTitle = styled.h4`
margin: 0%;
display: flex;
justify-content: space-between;
color: #BBA14F;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

`

export const LoreDescription = styled.p`
margin: 0%;
justify-content: space-between;
font-size: 20px;
color: black;
text-shadow: -1px 0 black, 0 1px black, 1px 0 white, 0 -1px white;
`

export const Box = styled.div`
position: absolute;
border: 2px dotted red;
display: flex;
align-items: center;
justify-content:center;

img{
    margin-left: 200%;

}
h1{
    padding: 100%;
    display: inline-block;
}
`

export const HoverText = styled.span`

visibility: hidden;
position: absolute;
width: 350px;
overflow-wrap: break-word;
background-color: #555;
color: #fff;
text-align: center;
border-radius: 6px;
z-index: 1;
margin-left: -140px;
font-size: 15px;
top: 120%;
opacity: 0;
transition: opacity 0.3s;

::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}

${PassiveBox}:hover & {
    visibility: visible;
    opacity: 1;
}

`

