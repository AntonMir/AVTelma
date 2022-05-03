// img
import logo from '@img/aboutUs/introduction/logo.svg'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'

const text = config.appLang === "EN"
    ? `With more than five years of experience, AVTELMA has been successfully 
        developing solutions and providing expertise in various technological 
        fields such as: automotive telematics, navigation and Internet of Things `
    : `Обладая более чем пятилетним опытом, AVTELMA успешно разрабатывает решения и
        предоставляет экспертные знания в различных технологических областях,
        таких как: автомобильная телематика, навигация и Интернет вещей`


export default function Text() {

    return (
        <TextStylde>
            <Logo src={logo} />
            <Description>{text}</Description>
        </TextStylde>
    );
}


const TextStylde = styled.div`
    max-width: 50%;

    @media (max-width: 600px) {
        max-width: 100%;
        margin-bop: 50px;
    }
`

const Logo = styled.img`
    width: 45%;
    height: auto;
    margin-bottom: calc(10px + 1vw);

    @media (max-width: 600px) {
        width: 70%;
    }
`

const Description = styled.p`
    font-size: calc(1.1vw + 11px);
    margin: calc(0.5vw + 5px) 0 calc(1vw + 5px) 0;
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 31px;
    }

    @media (max-width: 991px) {
        margin-bottom: calc(1.2vw + 17px);
    }
    
    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);
    }
`