import { useEffect, useState } from 'react'
// components
import ShortNews from '@news/elements/ShortNews.js'
import Head from '@news/elements/Head.js'
// img
import spinner from '@img/global/spinner.svg'
import search_img from '@img/global/searchImg.png'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// Link
import { HashLink } from 'react-router-hash-link'
// img 
import background from '@img/news/background.webp'
import arrow from '@img/news/arrow.svg'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function NewsListPage() {
    const [news, setNews] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)
    const [searchData, setSearchData] = useState('')

    // используем наш хук для запроса новостей
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем Новости
    useEffect(() => {
        async function getNews() {
            try {
                // получаем список новостей и закидываем в state
                const data = await request({ url: `${config.serverUrl}/api/news?populate=*` })
                setNews(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getNews()
    }, [request, repitRequest]);

    const filteredNews = (news && news.length > 0) && news.filter(el => {
        const ruFilter = el.attributes.Title_RU.toLowerCase().includes(searchData.toLowerCase())
        const enFilter = el.attributes.Title_EN.toLowerCase().includes(searchData.toLowerCase())
        return ruFilter || enFilter
    })

    return (
        <NewsWrapper>

            <Head />

            <Search>
                <SearchForm>
                    <input
                        type="text"
                        placeholder={
                            config.appLang === 'RU'
                                ? 'Поиск по новостям...'
                                : 'Search in the news...'
                        }
                        onChange={(event) => setSearchData(event.target.value)}
                    />
                    <img src={search_img} alt="img" />
                </SearchForm>
            </Search>

            <NewsList style={{ opacity: isLoaded ? 1 : 0 }}>
                <NewsListWrapper>
                    {
                        (news && news.length > 0) && filteredNews.map(post => {
                            return <ShortNews key={post.id} post={post} isLoaded={isLoaded} />
                        })
                    }
                </NewsListWrapper>
            </NewsList>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </NewsWrapper>
    );
}

const NewsWrapper = styled.div`

`

const HeadBackground = styled.div`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const UserPosNav = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.2vw;
    opacity: 0.7;
    line-height: 20px;

    font-size: calc(0.6vw + 6px);
    font-weight: 300;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
        opacity: 0.9;
    }

    // path elements
    > a {
        text-decoration: none;
        color: #fff;
        white-space: nowrap;
        :hover {
            text-decoration: underline 1px;
        }
    }

    // arrow
    > img {
        margin: 0 5px 0 8px;
        height: 50%;
        width: auto;
        @media (max-width: 768px) {
            height: 30%;
        }
    }

    // curent page
    > h6 {
        margin: 0;
        font-weight: 300;

        :hover {
            cursor: default;
        }

        @media (min-width: 1920px) {
            font-size: 18px;
        }
    
        @media (max-width: 768px) {
            font-size: calc(0.8vw + 8px);
        }
    }
`

const Title = styled.div`
    font-size: calc(1.9vw + 19px);
    font-weight: 700;
    margin: 0 5% 0 0;
    text-indent: 1.2vw;
    white-space: nowrap;

    @media (min-width: 1920px) {
        font-size: 56px;
    }
    
    @media (max-width: 380px) {
        font-size: calc(1.5vw + 15px);
    }
`

const Search = styled.div`
    display: none;
    padding: 50px 20px 20px;
    font-size: 30px;
    letter-spacing: -1px;
    max-width: 1440px;
    margin: 0 auto;
`

const SearchForm = styled.form`
    position: relative;
    padding: 0 10px 0 50px;
    max-width: calc(20% + 200px);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.55);
    border-radius: 5px;

    & > input {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;

        ::placeholder {
            color: rgba(0, 0, 0, 0.35);
        }
    }

    & > img {
        position: absolute;
        left: 10px;
        top: calc(50% - 15px);
        width: 30px;
        height: 30px;
    }
`

const NewsList = styled.div`
    max-width 1440px;
    margin: 30px auto 0;
    padding: 0 20px;
`

const NewsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #ccc;
    opacity: 0.9;
`
