import { useEffect, useState, useCallback } from 'react'
//components
import ShortNewsOrProduct from '@aboutus/elements/ShortNewsOrProduct.js'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// img
import spinner from '@img/global/spinner.svg'
// config
import config from '@config/config.js'
//styled
import styled from 'styled-components'

export default function AboutUs() {

    // фиксируем список новостей и проектов + текст главной страницы
    const [text, setText] = useState({})
    const [newsAndProducts, setNewsAndProducts] = useState({})

    // используем хук состояний, для повторного запроса данных с сервера при неудаче
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса Данных нашей домашней страницы
    const data = useHttp()

    const { request, isLoaded } = data


    useEffect(() => {
        // При первой отрисовке получаем данные
        async function getNewsAndProductsData() {
            try {
                // получаем данные и закидываем в state
                const allData = await request([
                    { url: `${config.serverUrl}/api/news?populate=*&pagination[limit]=8&sort=updatedAt:desc` },
                    { url: `${config.serverUrl}/api/products?populate=*&pagination[limit]=8&sort=updatedAt:desc` },
                    { url: `${config.serverUrl}/api/about-uses?populate=*` }
                ])

                // поставим метку news или products
                allData[0].data.map((el) => {
                    return el.type = 'news'
                })
                allData[1].data.map((el) => {
                    return el.type = 'product'
                })

                // отсортируем по дате
                const newsAndProductsSorted = allData[0].data.concat(allData[1].data).sort((a, b) => {
                    return Date.parse(b.attributes?.updatedAt) - Date.parse(a.attributes?.updatedAt)
                })

                // перезапишем индексы
                newsAndProductsSorted.map((el, index) => {
                    return el.id = index
                })

                // помещаем данные в state
                setNewsAndProducts(newsAndProductsSorted)
                setText(allData[2].data)

            } catch (error) {
                // используем хук состояний, для повторного запроса данных с сервера при неудаче
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getNewsAndProductsData()
    }, [request, repitRequest]);

    return (
        <>
            <AboutUsStyled style={{ opacity: isLoaded ? 1 : 0 }}>
                <Text>{
                    config.appLang === 'RU'
                        ? text[0]?.attributes.Text_RU
                        : text[0]?.attributes.Text_EN
                }</Text>
                <LastNewsAndProducts>
                    {
                        useCallback((newsAndProducts && newsAndProducts.length > 0) && newsAndProducts.map(post => {
                            if (post.id < 8) {
                                return <ShortNewsOrProduct key={post.id} post={post} isLoaded={isLoaded} />
                            }

                        }), [newsAndProducts])
                    }
                </LastNewsAndProducts>
            </AboutUsStyled>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </>
    )
}

const AboutUsStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width 1400px;
    margin: 0 auto;
    padding: 30px;
`

const Text = styled.p`
    font-size: calc(1.2vw + 12px);
    text-indent: 50px;
    @media (min-width: 1920px) {
        font-size: 35px;
    }
`

const LastNewsAndProducts = styled.div`
    // display: flex;
    display: none;
    flex-wrap: wrap;
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
