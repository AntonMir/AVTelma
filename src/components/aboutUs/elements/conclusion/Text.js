// config
import config from '@config/config.js'
// style
import styled from 'styled-components'

const text = config.appLang === "RU"
    ? [
        `Мы уверены, что сможем разработать решение независимо от того, какой 
        набор навыков оно потребует и какие проблемы нам придется преодолеть.`,
        `Мы работаем вместе, вместе обсуждаем проекты и проблемы и следим за тем, 
        чтобы каждый голос и мнение были услышаны и оценены.`
    ]
    : [
        `We make sure that we can develop a solution no matter what skillset it 
            will require and what challenges we’ll have to overcome.`,
        `We work together, discuss projects and problems together and make 
            sure that every voice and opinion is heard and valued.`
    ]


export default function Text() {

    return (
        <TextStylde>
            <Description>{text[0]}</Description>
            <Description>{text[1]}</Description>
        </TextStylde>
    );
}


const TextStylde = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 75%;
    padding-left: calc(1.5vw + 20px);

    @media (max-width: 600px) {
        max-width: 100%;
        margin-bop: 50px;
        padding-left: 0;
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