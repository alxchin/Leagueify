import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Container, Background, Button, Main, LeftMain, RightMain, ChampionName, SpellBox, Description, LoreTitle, LoreDescription, PassiveBox, Ability, HoverText } from './styles';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { FaAngleLeft } from 'react-icons/fa';


const ChampionInfo = () => {
    const { championid } = useParams();
    const [loaded, setLoaded] = useState(false);



    const [champData, setchampData] = useState([]);

    let championid1 = "";

    function checkChamp() {

        if (championid === 'Wukong') {
            return (championid1 = 'MonkeyKing')
        } else {
            return (championid1 = championid)
        }
    }

    var staticUrl = ('https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion/' + checkChamp(championid) + '.json')


    useEffect(() => {
        checkChamp(championid)
        $.getJSON(staticUrl, function (data) {
            console.log(data.data)
            console.log(data.data[checkChamp(championid)].title)
            console.log(data.data[checkChamp(championid)].passive.name)
            console.log(data.data[checkChamp(championid)].spells)
            console.log(data.data[checkChamp(championid)].lore)
            if (loaded === false) {
                setchampData(data)
                setLoaded(true);
            }
        });
    }, [])

    if (loaded === false) {
        return (
            <>
            </>
        )
    } else if (loaded && champData.length !== 0) {
        return (
            <Container
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <Background />
                <Link to={'/'}>
                    <Button> <FaAngleLeft style={{ width: 70, height: 70 }} /> </Button>
                </Link>
                <Main>
                    <LeftMain>
                        <img src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + checkChamp(championid) + "_0.jpg"} />
                    </LeftMain>
                    <RightMain>
                        <ChampionName> {championid.toUpperCase()} - {(champData.data[checkChamp(championid)].title).toUpperCase()} </ChampionName>
                        <SpellBox>
                            <PassiveBox>
                                <img src={'http://ddragon.leagueoflegends.com/cdn/12.9.1/img/passive/' + champData.data[checkChamp(championid)].passive.image.full} alt={championid} title={champData.data[checkChamp(championid)].passive.name} />
                                <Ability><strong>P</strong></Ability>
                                <HoverText> <strong style={{ color: 'blue' }}>{champData.data[checkChamp(championid)].passive.name}</strong> <br></br> {(champData.data[checkChamp(championid)].passive.description).replace(/<.*?>/g, '')}</HoverText >
                            </PassiveBox>
                            <PassiveBox>
                                <img src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/' + champData.data[checkChamp(championid)].spells[0].id + '.png'} alt={championid} title={champData.data[checkChamp(championid)].spells[0].name} />
                                <Ability><strong>Q</strong> </Ability>
                                <HoverText> <strong style={{ color: 'blue' }}>{champData.data[checkChamp(championid)].spells[0].name}</strong> <br></br> {(champData.data[checkChamp(championid)].spells[0].description).replace(/<.*?>/g, '')}</HoverText >
                            </PassiveBox>

                            <PassiveBox>
                                <img src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/' + champData.data[checkChamp(championid)].spells[1].id + '.png'} alt={championid} title={champData.data[checkChamp(championid)].spells[1].name} />
                                <Ability><strong>W</strong></Ability>
                                <HoverText> <strong style={{ color: 'blue' }}>{champData.data[checkChamp(championid)].spells[1].name}</strong> <br></br> {(champData.data[checkChamp(championid)].spells[1].description).replace(/<.*?>/g, '')}</HoverText >
                            </PassiveBox>
                            <PassiveBox>
                                <img src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/' + champData.data[checkChamp(championid)].spells[2].id + '.png'} alt={championid} title={champData.data[checkChamp(championid)].spells[2].name} />
                                <Ability><strong>E</strong></Ability>
                                <HoverText> <strong style={{ color: 'blue' }}>{champData.data[checkChamp(championid)].spells[2].name}</strong> <br></br> {(champData.data[checkChamp(championid)].spells[2].description).replace(/<.*?>/g, '')}</HoverText >
                            </PassiveBox>
                            <PassiveBox>
                                <img src={'https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/' + champData.data[checkChamp(championid)].spells[3].id + '.png'} alt={championid} title={champData.data[checkChamp(championid)].spells[3].name} />
                                <Ability><strong>R</strong></Ability>
                                <HoverText> <strong style={{ color: 'blue' }}>{champData.data[checkChamp(championid)].spells[3].name}</strong> <br></br> {(champData.data[checkChamp(championid)].spells[3].description).replace(/<.*?>/g, '')}</HoverText >
                            </PassiveBox>
                        </SpellBox>
                        <Description>
                            <LoreTitle> Champion Lore: </LoreTitle>
                            <LoreDescription> {champData.data[checkChamp(championid)].lore}</LoreDescription>
                        </Description>
                    </RightMain>
                </Main >
            </Container >

        )
    }
};

export default ChampionInfo
//<strong><FaAngleLeft style={{ width: 60, height: 80 }} /> </strong>