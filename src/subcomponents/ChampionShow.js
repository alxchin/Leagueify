import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { championData } from '../data/data';
import { motion } from 'framer-motion';
import Cards from './Cards';
import logo from "../assets/images/logo.png"
import background from "../assets/images/worldbg.jpg"


const Box = styled.div`
min-height: 100%;
height: auto !important;
height: 100%;
`

const Main = styled(motion.ul)`
width: auto;
display: flex;
flex-wrap: wrap;
position: absolute;
top: 200px;
justify-content: center;
border: 2px solid green;
`
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: auto;
height: auto;

img{
    position: absolute;
}
`

const Background = styled.img`
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
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}

const ChampionShow = () => {

    return (
        <Box>
            <Header>
                <img src={logo} style={{ width: 300, top: 2 }} alt="logo" />
            </Header>
            <Background />
            <Main variants={container} initial='hidden' animate='show'  >
                {
                    championData.map(d =>
                        <Cards key={d.id} data={d} />
                    )
                }
            </Main>

        </Box>

    )
}

export default ChampionShow

