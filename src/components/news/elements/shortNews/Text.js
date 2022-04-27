// img 
import arrow from '@img/homePage/products/arrow.svg'
// Link
import { HashLink } from 'react-router-hash-link'
// style
import styled from 'styled-components'


export default function Text(props) {

    const { title, text, uid, btn } = props

    const changeNewsPostUIDHandler = () => {
        localStorage.setItem('newsPageUID', uid)
    }

    return (
        <TextStylde>
            <Title>{title}</Title>
            <Description>{text}</Description>
            <Link onClick={changeNewsPostUIDHandler} to={uid}>
                <p>{btn}</p>
                <img src={arrow} alt="img" />
            </Link>
        </TextStylde>
    );
}


const TextStylde = styled.div`
    max-width: 64%;

    @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 20px;
    }
`
const Title = styled.h1`
    font-size: calc(1.5vw + 15px);
    font-weight: 700;
    color: #0095B6;
    margin: 0;

    @media screen and (min-width: 1920px) {
        font-size: 44px;
    }

    @media (max-width: 600px) {
        font-size: calc(1.6vw + 16px);
    }
`
const Description = styled.p`
    font-size: calc(0.9vw + 9px);
    margin: calc(1vw + 5px) 0;
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 27px;
    }

    @media (max-width: 991px) {
        margin: calc(1vw + 5px) 0;
    }
    @media (max-width: 600px) {
        font-size: calc(1.1vw + 11px);
        margin: calc(2vw + 15px) 0 calc(2vw + 7px); 
    }

`
const Link = styled(HashLink)`
    display: flex;
    align-items: center;
    font-size: calc(0.5vw + 15px);
    color: #000;
    opacity: 0.4;

    > p {
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        margin: 0;
        cursor: pointer;

        :hover {
            border-bottom: 1px solid #000;
        }
    }

    > img {
        width: auto;
        height: 25%;
        margin: 0 0 0 0.4vw;
    }

    @media (min-width: 1920px) {
        font-size: 23px;
    } 
`
