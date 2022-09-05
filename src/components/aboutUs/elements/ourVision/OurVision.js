//components
import Illustration from '@aboutus/elements/ourVision/Illustration.js'
// config
import config from '@config/config.js'
//styled
import styled from 'styled-components'


    let title = ''
    let text = ''

    switch(config.appLang){
    case 'RU':
        text = [
            `В Avtelma мы считаем, что интеграция современных технологий в повседневную 
                жизнь может значительно повысить качество жизни, а также обеспечить 
                чувство контроля и безопасности над ней.`,
            `Именно поэтому в нашей команде есть профессионалы широкого спектра: 
                от специалистов по телематике, инженеров-электриков, инженеров-программистов 
                и программистов до узкопрофильных специалистов, таких как радиоинженеры 
                и специалисты по навигации.`
        ]
        title = `Наше видение`
        break
    case 'AM':
        text = [
            `In Avtelam, we believe that modern technology integration into day-to-day 
                live can greatly increase the quality of life as well as provide feeling 
                of control and security over it.`,
            `That is why we have a broad-spectrum of professionals in our team, from 
                telematic specialists, electrical engineers software engineers and 
                programmers to narrow-field specialists such as radio-engineers and 
                navigation specialists.`
        ]
        title = `Our vision`
        break
    default:
        text = [
            `In Avtelma, we believe that modern technology integration into day-to-day 
                live can greatly increase the quality of life as well as provide feeling 
                of control and security over it.`,
            `That is why we have a broad-spectrum of professionals in our team, from 
                telematic specialists, electrical engineers software engineers and 
                programmers to narrow-field specialists such as radio-engineers and 
                navigation specialists.`
        ]
        title = `Our vision`
        break
    }


export default function OurVision() {

    return (
        <OurVisionComponent>

            <TextFirst>
                <Title>{title}</Title>
                <Description>{text[0]}</Description>
            </TextFirst>

            <Description>{text[1]}</Description>

            <IllustrationWrapper>
                <Illustration />
            </IllustrationWrapper>

        </OurVisionComponent>
    )
}

const OurVisionComponent = styled.div`
    margin: calc(4vw + 30px) 0 calc(3vw + 50px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(100px, auto));

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        margin-bottom: calc(1vw + 10px);
    }
`


const TextFirst = styled.div`
`

const Title = styled.h1`
    margin: 0 0 calc(15px + 1.5vw) 0;
    font-size: calc(1.9vw + 19px);
    font-weight: 700;
    white-space: nowrap;

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

    :last-of-type {
        order: 1;
    }

    @media screen and (min-width: 1920px) {
        font-size: 31px;
    }

    @media (max-width: 991px) {
        margin-bottom: calc(1.2vw + 17px);
        
        :last-of-type {
            grid-column: span 2;
            margin-top: calc(1.5vw + 15px);
        }
    }
    
    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);

        :last-of-type {
            grid-column: 1;
            margin-top: 0;
        }
    }
`
const IllustrationWrapper = styled.div`
    grid-row: span 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 991px) {
        grid-row: span 1;
    }

    @media (max-width: 600px) {
        grid-row: 1;
        grid-column: 1;
        margin-bottom: calc(10vw + 60px);
    }
`