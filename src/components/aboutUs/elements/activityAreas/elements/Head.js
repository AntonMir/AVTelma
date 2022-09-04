// config
import config from '@config/config.js'
//styled
import styled from 'styled-components'

    let title = ''
    let text = ''

switch(config.appLang){
    case 'RU':
        text = `В Avtelma мы разрабатываем современные решения для различных сфер жизни: 
                от интеллектуального трафика по всему городу до улучшений персонального умного дома.`
        title = `Сферы деятельности компании`
        break
    case 'AM':
        text = `In Avtelam, we develop modern solutions for various life spheres. 
                From city-wide smart traffic to personal SmartHome improvements.`
        title = `Areas of activity of the company`
        break
    default:
        text = `In Avtelma, we develop modern solutions for various life spheres. 
                From city-wide smart traffic to personal SmartHome improvements.`
        title = `Areas of activity of the company`
        break
}

export default function Head() {

    return (
        <Content>
            <Title>{title}</Title>
            <Description>{text}</Description>
        </Content>
    )
}

const Content = styled.div`
    margin: calc(4vw + 30px) 0 calc(3vw + 50px);

    @media (max-width: 600px) {
        margin-bottom: calc(1vw + 40px);
    }
`

const Title = styled.h1`
    margin: 0 0 calc(15px + 1.5vw) 0;
    font-size: calc(1.9vw + 19px);
    font-weight: 700;

    @media (min-width: 1920px) {
        font-size: 56px;
    }
    
    @media (max-width: 380px) {
        font-size: calc(1.5vw + 15px);
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