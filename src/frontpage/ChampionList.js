import React, { useState } from 'react';
import { Container, Background, Header, ChampionContainer, SearchBar, SearchBox, AlphaBar } from './styles';
import logo from "../assets/images/leagueify.png";
import { championData } from '../data/data';
import Cards from '../subcomponents/Cards';
import Sound from '../music/Sound';




const ChampionList = () => {

    const [searchChamp, setSearchChamp] = useState('')
    const [searchAlphabet, setSearchAlphabet] = useState('')
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'RESET']

    function alphaSearch(data) {
        setSearchAlphabet(data);
        setSearchChamp('');
    }

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <Header>
                <img src={logo} style={{ width: 300, top: 30, backgroundColor: 'transparent' }} alt="logo" />
            </Header>

            <Background />


            <ChampionContainer initial='hidden' animate='show'  >
                {
                    championData.filter((d) => {
                        if (searchAlphabet === '' || searchAlphabet === 'RESET') {
                            return (d)
                        } else if (d.name.toLowerCase().charAt(0) === searchAlphabet.toLowerCase()) {
                            return (d)
                        }

                    }).filter((d) => {
                        if (searchChamp === '') {
                            return (d)
                        } else if (d.name.toLowerCase().includes(searchChamp.toLowerCase()))
                            return (d)
                    }).map(d =>
                        <Cards data={d} key={d.id} />
                    )
                }
            </ChampionContainer>
            <SearchBox>
                <SearchBar type="text" placeholder="Search..." onChange={event => { setSearchChamp(event.target.value) && setSearchAlphabet('') }} />
                {alphabet.map(data =>
                    <AlphaBar onClick={() => { alphaSearch(data) }}> {data} </AlphaBar>
                )}
            </SearchBox>
            {console.log(searchAlphabet)}
            {console.log(searchChamp)}


        </Container>

    )
}

export default ChampionList