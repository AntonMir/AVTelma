// style
import styled from 'styled-components'


export default function Text(props) {

    const { title, text, url, btn } = props

    return (
        <TextStylde>
            <Title>{title}</Title>
            <Description>{text}</Description>
            <Link href={url}>{btn}</Link>
        </TextStylde>
    );
}


const TextStylde = styled.div`
    max-width: 48%;

    @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 20px;
    }
`
const Title = styled.h1`
    font-size: calc(1.9vw + 19px);
    font-weight: 700;
    color: #0095B6;
    margin: 0;
    white-space: nowrap;

    @media screen and (min-width: 1920px) {
        font-size: 56px;
    }

    @media screen and (max-width: 1600px) {
        font-size: calc(1.7vw + 17px);
    }

    @media screen and (max-width: 600px) {
        font-size: calc(1.85vw + 18.5px);
    }

    @media (max-width: 380px) {
        font-size: calc(1.5vw + 14px);
    }
`
const Description = styled.p`
    font-size: calc(0.9vw + 9px);
    margin: calc(1.5vw + 15px) 0 calc(1.5vw + 20px);
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 27px;
    }

    @media (max-width: 991px) {
        margin: calc(1vw + 10px) 0 calc(1.5vw + 15px);
    }
    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);
        margin: calc(1vw + 10px) 0 calc(2vw + 20px);
    }

`
const Link = styled.a`
    padding: calc(0.4vw + 6px) calc(1.1vw + 16px) calc(0.4vw + 7px);
    font-size: calc(0.5vw + 15px);
    border: 2px solid #13A9D1;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    color: #000;

    :hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);        
    }

    @media (min-width: 1920px) {
        font-size: 23px;
    } 
`
