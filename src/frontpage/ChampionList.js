import React from 'react';
import { Container, Background, Header, ChampionContainer, container } from './styles';
import logo from "../assets/images/logo.png";
import { championData } from '../data/data';
import Cards from '../subcomponents/Cards';
import Sound from '../music/Sound';
import fighter from '../assets/images/fighter.png';


const ChampionList = () => {
    return (

        <Container>

            <Header>
                <img src={logo} style={{ width: 300, top: 2 }} alt="logo" />
            </Header>

            <Background />
            <Sound />

            <ChampionContainer variants={container} initial='hidden' animate='show'  >
                {
                    championData.map(d =>
                        <Cards data={d} key={d.id} />
                    )
                }
            </ChampionContainer>

        </Container>

    )
}

export default ChampionList