// config
import config from '@config/config.js'
// style
import styled from 'styled-components'

const text = config.appLang === "EN"
    ? [
        `Modern technology integration into day-to-day live can greatly `,
        `increase the quality of life `,
        `as well as provide feeling `,
        `of control and security `,
        `over it.`
    ]
    : [
        `Интеграция современных технологий в повседневную жизнь может значительно `,
        `повысить качество жизни `,
        `, а также обеспечить чувство `,
        `контроля и безопасности `,
        `над ней.`
    ]

export default function Slogan() {

    return (
        <Background>
            <Content>
                <Text>
                    {text[0]}
                    <BoldText>{text[1]}</BoldText>
                    {text[2]}
                    <BoldText>{text[3]}</BoldText>
                    {text[5]}
                </Text>
            </Content>
        </Background>
    );
}


const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0095B6;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    padding: 2% 0;

    @media (max-width: 600px) {
        padding: 10% 0;
    }
`
const Text = styled.p`
    text-align: center;
    max-width: 66%;
    font-weight: 300;
    color: #fff;
    font-size: calc(0.9vw + 9px);
    
    @media (min-width: 1920px) {
        font-size: 27px;
    }

    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);
        max-width: 85%;
        line-height: 32px;
    }
`
const BoldText = styled.span`
    font-weight: 500;
`