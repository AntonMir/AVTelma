// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function ShortNewsOrProduct(props) {
    // Подставляем Title, description и Img в соответствии с установленным языком приложения
    const post = config.appLang === 'RU'
        ? {
            title: props.post.attributes.Title_RU,
            img: config.serverUrl + props.post.attributes.Img_RU.data.attributes.url,
            url: props.post.attributes.URL_RU,
            UID: props.post.attributes.UID,
            type: props.post.type
        }
        : {
            title: props.post.attributes.Title_EN,
            img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
            url: props.post.attributes.URL_EN,
            UID: props.post.attributes.UID,
            type: props.post.type
        }

    const changeNewsPostUIDHandler = () => {
        // так же зафиксируем в localstorage
        localStorage.setItem('newsPageUID', post.UID)
    }

    if (post.type === 'news') {
        return (
            <ShortNewsLink to={`/news/${post.UID}`} onClick={changeNewsPostUIDHandler}>
                <ShortNewsOrProductStyled img={post.img}>
                    <h1>{post.title}</h1>
                </ShortNewsOrProductStyled>
            </ShortNewsLink>
        );
    }

    return (
        <ShortProductLink href={post.url}>
            <ShortNewsOrProductStyled img={post.img}>
                <h1>{post.title}</h1>
            </ShortNewsOrProductStyled>
        </ShortProductLink>
    );

}

const ShortNewsLink = styled(HashLink)`
    width: 23%;
    margin: 1%;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const ShortProductLink = styled.a`
    width: 23%;
    margin: 1%;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const ShortNewsOrProductStyled = styled.div`
    min-height: 300px;
    border: 1px dashed #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${(props) => `url(${props.img})`};

    & > h1 {
        color: #000;
        height: auto;
        -webkit-text-stroke: 1px #fff;
        margin: 0;
        font-size: 25px;
        font-weight: bold;
    }  
`