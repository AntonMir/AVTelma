import { useEffect, useState } from 'react'
// components
import ShortNews from '@shortNews/ShortNews.js'
import Head from '@newsSinglePage/elements/otherNews/elements/Head.js'
// img
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function OtherNews() {
    const [news, setNews] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса новостей
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем Новости
    useEffect(() => {
        async function getNews() {
            try {
                // получаем список новостей и закидываем в state
                const data = await request({
                    url: `${config.serverUrl}/api/news?populate=*&filters[UID][$ne]=${localStorage.getItem('newsPageUID')}`
                })
                setNews(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getNews()
    }, [request, repitRequest]);


    return (
        <NewsWrapper>

            <Head />

            <NewsList isLoaded={isLoaded}>
                {(news && news.length > 0) && news.map(post => {
                    return <ShortNews key={post.id} post={post} isLoaded={isLoaded} />
                })}
            </NewsList>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </NewsWrapper>
    );
}

const NewsWrapper = styled.div`
    position: relative;
    margin-top: calc(3vw + 20px);
`

const NewsList = styled.div`
    max-width: 1440px;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? '0 auto' : '0'};

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 991px) {
        max-width: 750px;
    }

    @media (max-width: 800px) {
        padding: 0 2%;
    }
`

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 450px;
    opacity: 0.9;

    > img {
        max-width: calc(5vw + 35px);
        height: auto;
    }
`
