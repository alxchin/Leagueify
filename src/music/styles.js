import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const SoundBox = styled.div`
display:flex;
cursor:pointer;
position:absolute;
left:7rem;
top:3rem;

z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

export const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`

export const Line = styled.span`
background: black;
border: 1px solid black;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 2rem;
width: 3.5px;
margin:0 0.1rem
`