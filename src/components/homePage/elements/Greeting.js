// img
import background from '@img/homePage/greeting/greetingBackground.webp'
import logo from '@img/homePage/greeting/greetingLogo.svg'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'

const text = config.appLang === "EN"
    ? {
        slogan: ['We', 'Connect', 'Everything'],
        description: 'Avtelma develops Telematics and IoT solutions for any imaginable sphere of life',
        btn: 'Read more '
    }
    : {
        slogan: ['Мы', 'Соединяем', 'Все'],
        description: 'Avtelma разрабатывает телематические и IoT-решения для любой мыслимой сферы жизни.',
        btn: 'Подробнее'
    }


export default function Greeting() {

    return (
        <GreetingStyled>
            <Background>
                <Content>
                    <Logo src={logo} alt="logo.webp" />
                    <Slogan>{text.slogan[0]} <span>{text.slogan[1]}</span> {text.slogan[2]}</Slogan>
                    <Description>{text.description}</Description>
                    <Btn to="/aboutus">{text.btn}</Btn>
                </Content>
            </Background>
        </GreetingStyled>
    );
}

const GreetingStyled = styled.div`
    height: 100vh;
    width: 100%;
    margin-top: -80px;

    @media (max-width: 600px) {
        height: 75vh;
    }   

    @media (max-height: 710px) {
        height: 710px;
    }   
`

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 100%;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 47%;
    margin-top: 76px;

    @media (max-width: 1200px) {
        margin-top: 66px;
    }    
    @media (max-width: 800px) {
        margin-top: 61px;
    }

    @media (max-width: 991px) {
        max-width: 65%;
    }
    @media (max-width: 600px) {
        max-width: 90%;
    }
`

const Logo = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 600px) {
        width: 90%;
        margin: 0 auto;
    }
`

const Slogan = styled.h1`
    font-weight: 500;
    color: #fff;
    margin: calc(3vw + 25px) 0 0;
    font-size: calc(2.4vw + 24px);

    & > span {
        color: #1BB9E5;
    }

    @media (min-width: 1920px) {
        font-size: 70px;
    }
`

const Description = styled.p`
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    margin: calc(1vw + 10px) 0;
    font-size: calc(1.2vw + 13px);
    
    @media (min-width: 1920px) {
        font-size: 36px;
    }

    @media (max-width: 600px) {
        font-size: calc(1.6vw + 16px);
    }
`

const Btn = styled(HashLink)`
    padding: calc(0.5vw + 9px) calc(1.4vw + 22px) calc(0.5vw + 10px);
    font-size: calc(0.5vw + 15px);
    background-color: #13A9D1;
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.75);
    color: #fff;
    align-self: flex-start;
    margin-top: 10px;

    :hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.35);
    }

    @media (min-width: 1920px) {
        font-size: 23px;
    } 
`