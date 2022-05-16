import React, { useRef, useState } from 'react';
import { SoundBox, Line } from './styles';
import music from "../assets/audio/RISE.mp3";
import { SiYoutubemusic } from 'react-icons/si';

const Sound = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
            ref.current.volume = 0.08
        } else {
            ref.current.pause();
        }
    }

    return (
        <SoundBox onClick={() => handleClick()}>
            <SiYoutubemusic size={40} />
            &nbsp; &nbsp;
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <audio src={music} ref={ref} loop />
        </SoundBox>
    )
}

export default Sound