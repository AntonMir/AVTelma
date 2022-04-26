import { useState } from 'react'
// config
import config from '@config/config.js'
// img 
import spinner from '@img/global/spinner.svg'
// style
import styled from 'styled-components'


export default function ShortProducts(props) {

    const [isLoaded, setIsLoaded] = useState(false);

    // Подставляем Title, description и Img в соответствии с установленным языком приложения
    const product = config.appLang === 'RU'
        ? {
            title: props.product.attributes.Title_RU,
            img: config.serverUrl + props.product.attributes.Img_RU.data.attributes.url,
            UID: props.product.attributes.UID,
            url: props.product.attributes.URL_RU
        }
        : {
            title: props.product.attributes.Title_EN,
            img: config.serverUrl + props.product.attributes.Img_EN.data.attributes.url,
            UID: props.product.attributes.UID,
            url: props.product.attributes.URL_EN
        }

    return (
        <ShortProductLink href={product.url}>
            <ShortProductStyled>
                <h1>{product.title}</h1>
                <ShortProductImgWrapper>
                    <ShortProductImg
                        onLoad={() => setIsLoaded(true)}
                        loading='lazy'
                        src={product.img}
                        alt="img"
                        isLoaded={isLoaded}
                    />
                    {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
                </ShortProductImgWrapper>
            </ShortProductStyled>
        </ShortProductLink>

    );
}

const ShortProductLink = styled.a`
    margin: 1% 1% 0 0;
    width: 49%;
    @media (max-width: 991px) {
        width: 100%;
        margin: 4% 2% 0 0;
    }
`

const ShortProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: inset 0 -90px 90px -20px #000;
    width: 100%;
    height: 400px;
    background-color: #ccc;

    & > h1 {
        color: #003355;
        max-height: 20%;
        -webkit-text-stroke: 0.5px #AAFFFF;
        margin: 0 0 10px;
        font-weight: bold;
        font-size: calc(1vw + 14px);
        @media (min-width: 1920px) {
            font-size: 33px;
        }
    }    

    @media (max-width: 1200px) {
        height: 350px;
    }
    @media (max-width: 991px) {
        height: 450px;
    }
    @media (max-width: 600px) {
        height: 350px;
        padding: 15px;
    }
    @media (max-width: 500px) {
        height: 300px;
    }
    @media (max-width: 400px) {
        height: 250px;
    }
    @media (max-width: 350px) {
        height: 220px;
    }
`

const ShortProductImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 80%;
    flex: 1;
`

const ShortProductImg = styled.img`
    position: absolute;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? 'auto' : '0'};
    max-width: 100%;
`

const Spinner = styled.img`
    width: 150px;
    margin: auto;
`
