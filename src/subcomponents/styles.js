import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Name = styled.h3`
display: flex;
justify-content: center;
align-content: center;
color: #BBA14F;
text-transform: uppercase;
flex: 0 0 100%;

`

export const ChampionBox = styled(motion.li)`
width: 300px;
height: 600px;
position: relative;
margin: 1%;
margin-left: 3.3%;
transition: all 0.05s ease;
display: flex;
justify-content: center;
align-items:center;
cursor: pointer;


img {
    height: 550px;
}

div {
    position: absolute;
    bottom: 25px;
    background-color: black;
    height: 20%;
    width: 100%;
    opacity: 0.6;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    align-content: flex-start;

}
&:hover {
    img{
        transform: scale(1.1);
    }

    div{
        height: 25%;
        width: 100.6%;
        bottom: 5px;
        opacity: 0.9;
        transform: scale(1.1); 
    }

}
`
export const Image = styled.img`
display:flex;
justify-content: between;
align-items: center;
padding: 2%;
`

export const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.05,
        }
    }
}