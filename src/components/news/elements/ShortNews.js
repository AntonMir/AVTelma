// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function ShortNews(props) {

    // Подставляем Title, description и Img в соответствии с установленным языком приложения
    const post = config.appLang === 'RU'
        ? {
            title: props.post.attributes.Title_RU,
            description: props.post.attributes.Description_RU,
            img: config.serverUrl + props.post.attributes.Img_RU.data.attributes.url,
            UID: props.post.attributes.UID
        }
        : {
            title: props.post.attributes.Title_EN,
            description: props.post.attributes.Description_EN,
            img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
            UID: props.post.attributes.UID
        }

    const changeNewsPostUIDHandler = () => {
        // так же зафиксируем в localstorage
        localStorage.setItem('newsPageUID', post.UID)
    }

    return (
        <ShortNewsLink to={`${post.UID}`} onClick={changeNewsPostUIDHandler}>
            <ShortNewsStyled >
                <NewsImg img={post.img} />
                <h1>{post.title}</h1>
            </ShortNewsStyled>
        </ShortNewsLink>

    );
}

const ShortNewsLink = styled(HashLink)`
    margin: 30px 0;
`

const ShortNewsStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px 40px;
    min-height: 250px;
    box-shadow: inset 0 -90px 90px -20px #000;

    @media (max-width: 991px) {
        padding: 20px 30px;
    }

    & > h1 {
        color: #003355;
        height: auto;
        -webkit-text-stroke: 1px #AAFFFF;
        margin: 0;
        font-size: calc(1vw + 14px);
        @media (min-width: 1920px) {
            font-size: 35px;
        }
    }  
`

const NewsImg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${(props) => `url(${props.img})`};
`