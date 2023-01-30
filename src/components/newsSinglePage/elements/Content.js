import { useState } from 'react'
// img
import spinner from '@img/global/spinner.svg'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Content(props) {

    const [isLoaded, setIsLoaded] = useState(false);

    // Подставляем Title, description и Img в соответствии с установленным языком приложения
    let post = {}

    try {
        switch (config.appLang) {
            case 'RU':
                post = {
                    title: props.post.attributes.Title_RU,
                    description: props.post.attributes.Description_RU,
                    text: props.post.attributes.Full_Text_RU,
                    img: config.serverUrl + props.post.attributes.Img_RU.data.attributes.url,
                    videoUrl: props.post.attributes.Video_RU,
                    UID: props.post.attributes.UID,
                    tag: props.post.attributes.Tag,
                    createdAt: props.post.attributes.createdAt,
                    updatedAt: props.post.attributes.updatedAt,
                    publishedAt: props.post.attributes.publishedAt,
                    btn: 'Показать полностью',
                    outerLink: props.post.attributes.Outer_Link
                }
                break
            case 'AM':
                post = {
                    title: props.post.attributes.Title_AM,
                    description: props.post.attributes.Description_AM,
                    text: props.post.attributes.Full_Text_AM,
                    img: config.serverUrl + props.post.attributes.Img_AM.data.attributes.url,
                    videoUrl: props.post.attributes.Video_AM,
                    UID: props.post.attributes.UID,
                    tag: props.post.attributes.Tag,
                    createdAt: props.post.attributes.createdAt,
                    updatedAt: props.post.attributes.updatedAt,
                    publishedAt: props.post.attributes.publishedAt,
                    btn: 'Read more...',
                    outerLink: props.post.attributes.Outer_Link
                }
                break
            default:
                // Если конфиг не указан либо EN
                post = {
                    title: props.post.attributes.Title_EN,
                    description: props.post.attributes.Description_EN,
                    text: props.post.attributes.Full_Text_EN,
                    img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
                    videoUrl: props.post.attributes.Video_EN,
                    UID: props.post.attributes.UID,
                    tag: props.post.attributes.Tag,
                    createdAt: props.post.attributes.createdAt,
                    updatedAt: props.post.attributes.updatedAt,
                    publishedAt: props.post.attributes.publishedAt,
                    btn: 'Read more...',
                    outerLink: props.post.attributes.Outer_Link
                }
                break
        }
    } catch {
        // если ошибка получения данных с сервера
        post = {
            title: props.post.attributes.Title_EN,
            description: props.post.attributes.Description_EN,
            text: props.post.attributes.Full_Text_EN,
            img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
            videoUrl: props.post.attributes.Video_EN,
            UID: props.post.attributes.UID,
            tag: props.post.attributes.Tag,
            createdAt: props.post.attributes.createdAt,
            updatedAt: props.post.attributes.updatedAt,
            publishedAt: props.post.attributes.publishedAt,
            btn: 'Read more...',
            outerLink: props.post.attributes.Outer_Link
        }
    }

    function parseDate(dateFromDB) {
        const parsedDate = new Date(dateFromDB)
        const day = parsedDate.getDate() < 10 ? '0' + parsedDate.getDate() : parsedDate.getDate()
        const month = parsedDate.getMonth() + 1 < 10 ? '0' + (parsedDate.getMonth() + 1) : parsedDate.getMonth() + 1
        const year = parsedDate.getFullYear()
        let result = day + '.' + month + '.' + year
        return result
    }

    let parsedDate = parseDate(post.publishedAt)

    return (
        <NewsContent>
            <Head>
                <p>{parsedDate}</p>
                <p>{post.tag}</p>
            </Head>
            <Title>{post.title}</Title>
            <Description>
                <p>{post.description}</p>
                <a href={post.outerLink}>{post.btn}</a>
            </Description>


            <Img
                onLoad={() => setIsLoaded(true)}
                src={post.img}
                loading='lazy'
                alt="img"
                isLoaded={isLoaded}
            />
            {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
            <Text>{post.text}</Text>
            <Video
                src={post.videoUrl}
                style={{ display: post.videoUrl.length > 0 ? '' : 'none' }}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </Video>
        </NewsContent>
    );
}


const NewsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 7vw;
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: calc(10% + 100px);
    color: #0095B6;
    margin-bottom: 10px;

    font-size: calc(0.6vw + 6px);
    font-weight: 300;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
    }
    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
    }
   
    > p {
        margin: 0;
        cursor: default;
    }
`

const Title = styled.h1`
    font-size: calc(1.6vw + 16px);
    font-weight: 700;
    margin: calc(1vw + 5px) 0 0 0;
    border: none;
    line-height: 40px;

    @media screen and (min-width: 1920px) {
        font-size: 44px;
    }

    @media (max-width: 991px) {
        margin-top: calc(1vw + 10px);
    }

    @media (max-width: 600px) {
        font-size: calc(1.6vw + 16px);
    }
`

const Description = styled.div`
    font-size: calc(0.7vw + 7px);
    margin: calc(1vw + 5px) 0 calc(1vw + 15px);

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }

    @media (max-width: 991px) {
        margin-bottom: calc(1vw + 10px);
    }
    @media (max-width: 600px) {
        font-size: calc(1.1vw + 11px);
    }
    
    > p {
        margin: 0 0 10px 0;
    }

    > a {
        cursor: pointer;
        color: #888;

        :hover {
            border-bottom: 1px solid #888;
        }
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? 'auto' : '0'};
`

const Text = styled.p`
    font-size: calc(0.7vw + 7px);
    margin: calc(1.5vw + 10px) 0;

    @media screen and (min-width: 1920px) {
        font-size: 22px;
    }

    @media (max-width: 991px) {
        margin-bottom: calc(1vw + 10px);
    }
    @media (max-width: 600px) {
        font-size: calc(1.1vw + 11px);
    }
`

const Video = styled.iframe`
    width: 100%;
    height: auto;
    min-height: calc(100px + 30vw);
`

const Spinner = styled.img`
    height: auto;
    width: 7%;
    margin: 80px auto;
`