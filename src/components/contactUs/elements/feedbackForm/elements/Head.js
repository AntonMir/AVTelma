// config
import config from '@config/config.js'
//styled
import styled from 'styled-components'


const title = config.appLang === "EN"
    ? `Contact us`
    : `Форма для обратной связи`

const text = config.appLang === "EN"
    ? `If you have additional questions or suggestions about out product, please 
        do not hesitate to inquire by e-mail: our team of experts will answer all your questions`
    : `Если у вас остались вопросы или предложения, вы можете нам написать и мы 
        с удовольствием ответим на ваши вопросы:`


export default function Head() {

    return (
        <Content>
            <Title>{title}</Title>
            <Description>{text}</Description>
        </Content>
    )
}

const Content = styled.div`
    margin: 0 0 calc(2vw + 20px);

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