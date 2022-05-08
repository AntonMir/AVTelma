//styled
import styled from 'styled-components'


export default function SmartEl(props) {

    const { title, text, img } = props.el

    return (
        <SmartElComponent>
            <Title>{title}</Title>
            <Description>{text}</Description>
            <Illustration src={img} alt="img" />
        </SmartElComponent>
    )
}

const SmartElComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    
    // styles for 3 and 4 els______
    :nth-child(n+3) {
        justify-content: flex-start;
        > img {
            order: -1;
            margin-bottom: calc(1vw + 5px);
        }
    }

    @media (min-width: 1920px) {
        :nth-child(n+3) {
            > img {
                margin-bottom: 24px;
            }
        }
    }
    //_____________________________
`

const Title = styled.h1`
    margin: 0;
    font-size: calc(1.2vw + 12px);
    font-weight: 700;

    @media (min-width: 1920px) {
        font-size: 35px;
    }
    
    @media (max-width: 991px) {
        font-size: calc(1.3vw + 13px);
    }

    @media (max-width: 400px) {
        font-size: calc(1.5vw + 15px);
        margin-bottom: 5px;
    }
`

const Description = styled.p`
    font-size: calc(0.8vw + 8px);
    margin: calc(0.5vw + 5px) 0 calc(1vw + 5px) 0;
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 24px;
        margin: 14px 0 24px;
    }

    @media (max-width: 600px) {
        font-size: calc(1vw + 10px);
    }
`

const Illustration = styled.img`
    max-width: 100%;
    height: auto;

`