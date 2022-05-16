import React from 'react'
import { Item, ChampionBox, Name, Image } from './styles'

const Cards = (props) => {
    const { id, name, icon, tags } = props.data;


    return (

        <ChampionBox key={id} variants={Item}
        >
            <img src={icon} alt="" />
            <div>
                <Name> {name}</Name>
                {
                    tags.map((tag, id) => {
                        return <Image src={tag} alt={id} title={tag.slice(77).slice(0, -4).toUpperCase()} style={{ width: 45, height: 45 }} />
                    })
                }

            </div>


        </ChampionBox >
    )
}
export default Cards



