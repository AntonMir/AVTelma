// config
import config from '@config/config.js'
// style
import styled from 'styled-components'

const text = config.appLang === "EN"
    ? [
        `If anything might be improved by modern technological approach – `,
        `we can make it happen`
    ]
    : [
        `Если что–то можно улучшить с помощью современного технологического подхода - `,
        `мы можем это сделать`
    ]

export default function Slogan() {

    return (
        <Background>
            <Content>
                <Text>
                    {text[0]}
                    <BoldText>{text[1]}</BoldText>
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
    max-width: 75%;
    font-weight: 300;
    color: #fff;
    font-size: calc(1.1vw + 11px);
    
    @media (min-width: 1920px) {
        font-size: 29px;
    }

    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);
        max-width: 75%;
        line-height: 42px;
    }
`
const BoldText = styled.span`
    font-weight: 500;
`