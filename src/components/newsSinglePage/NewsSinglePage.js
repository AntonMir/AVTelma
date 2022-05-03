import { useEffect, useState } from 'react'
// components
// import ShortNews from '@news/elements/shortNews/ShortNews.js'
import Head from '@newsSinglePage/elements/Head.js'
import Content from '@newsSinglePage/elements/Content.js'
import OtherNews from '@newsSinglePage/elements/otherNews/OtherNews.js'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// store
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function NewsPage() {

    const [post, setPost] = useState(null);
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса новостей
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем Новости и отсортировываем нужную нам
    useEffect(() => {
        async function getNews() {
            try {
                // получаем список новостей и закидываем в state
                const data = await request({
                    url: `${config.serverUrl}/api/news?populate=*&filters[UID][$eq]=${localStorage.getItem('newsPageUID')}`
                })
                setPost(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getNews()
    }, [request, repitRequest]);

    store.subscribe(() => setRepitRequest(!repitRequest))

    return (
        post && post.length > 0 && post.map(post => {
            return (
                <NewsWrapper key={post.id}>
                    <Head post={post} />
                    <NewsContentWrapper>
                        <Content post={post} isLoaded={isLoaded} />
                        <OtherNews />
                    </NewsContentWrapper>
                </NewsWrapper>
            )
        })
    )
}


const NewsWrapper = styled.div`
    position: relative;
    margin-top: -80px;
`

const NewsContentWrapper = styled.div`
    max-width: 1440px;
    margin: 30px auto;

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
    
    @media (max-width: 600px) {
        padding: 0 5%;
    }
`

