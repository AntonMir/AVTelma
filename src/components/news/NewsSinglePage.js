import { useEffect, useState } from 'react'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function NewsPage() {

    const [allNews, setNewsPosts] = useState(null);
    const [chosenNews, setChosenNews] = useState(null);
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса новостей
    const { request } = useHttp()

    // При первой отрисовке получаем Новости и отсортировываем нужную нам
    useEffect(() => {
        async function getNews() {
            try {
                // получаем список новостей и закидываем в state
                const data = await request({ url: `${config.serverUrl}/api/news?populate=*` })
                setNewsPosts(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getNews()
    }, [request, repitRequest]);

    // Если мы получили все новости и в localstorage есть UID нужной страницы, то
    // записываем нужную нам страницу в локальный state
    useEffect(() => {
        if (allNews && localStorage.getItem('newsPageUID')) {
            setChosenNews(allNews.filter(el => el.attributes.UID === localStorage.getItem('newsPageUID')))
        }
    }, [allNews]);

    if (chosenNews) {
        return (
            <NewsPageWrapper>
                <BackBtnLink to='/news'>
                    {
                        config.appLang === 'RU'
                            ? '<<Назад'
                            : '<<Back'
                    }
                </BackBtnLink>

                <NewsStyled>
                    <Title>
                        {
                            config.appLang === 'RU'
                                ? chosenNews[0].attributes.Title_RU
                                : chosenNews[0].attributes.Title_EN
                        }
                    </Title>

                    <Img
                        src={
                            config.appLang === 'RU'
                                ? config.serverUrl + chosenNews[0].attributes.Img_RU.data.attributes.url
                                : config.serverUrl + chosenNews[0].attributes.Img_EN.data.attributes.url
                        }
                    />

                    <Text>
                        {
                            config.appLang === 'RU'
                                ? chosenNews[0].attributes.Description_RU
                                : chosenNews[0].attributes.Description_EN
                        }
                    </Text>
                </NewsStyled>
            </NewsPageWrapper>
        );
    }

    return <></>

}


const NewsPageWrapper = styled.div`

`

const BackBtnLink = styled(HashLink)`
    display: inline-block;
    border-bottom: 3px #091F2C solid;
    width: 100%;
    padding: 20px 15%;
    font-size: 30px;
    letter-spacing: -1px;
`

const NewsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
`

const Title = styled.h1`
    font-size: 40px;
    align-self: flex-start;
    margin: 60px 0 60px;
`

const Text = styled.p`
    font-size: 30px;
    text-indent: 40px;
    margin: 60px 0;
`

const Img = styled.img`
    width: 100%;
    height: auto;
`

