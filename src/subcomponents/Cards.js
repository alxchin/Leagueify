import React from 'react';
import { Item, ChampionBox, Name, Image } from './styles';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const { id, name, icon, tags } = props.data;

    return (

        <ChampionBox key={id} variants={Item}>
            <Link to={`/info/${name.replace(/\s/g, '').replace(/\./g, '').replace(/['"]+/g, '')}`}>
                <img src={icon} alt="" />
                <div>
                    <Name> {name}</Name>
                    {
                        tags.map((tag, id) => {
                            return <Image src={tag} key={id} alt={id} title={tag.slice(77).slice(0, -4).toUpperCase()} style={{ width: 45, height: 45 }} />
                        })
                    }

                </div>

            </Link>
        </ChampionBox >

    )
}
export default Cards



