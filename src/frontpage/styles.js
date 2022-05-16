import styled from "styled-components";
import background from "../assets/images/worldbg.jpg"
import { motion } from 'framer-motion'


export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.1,
        }
    }
}

export const Container = styled.div`
min-height: 100%;
height: auto !important;
height: 100%;
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: auto;
height: auto;

img{
    position: absolute;
}
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

export const ChampionContainer = styled(motion.ul)`
width: auto;
display: flex;
flex-wrap: wrap;
position: absolute;
top: 150px;
justify-content: center;
padding: 0;

`
