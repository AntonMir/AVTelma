import { useEffect, useState } from 'react'
// img
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function HomePage() {
    const [homePageData, setHomePageData] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса Данных нашей домашней страницы
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем данные
    useEffect(() => {
        async function getHomePageData() {
            try {
                // получаем данные и закидываем в state
                const data = await request({ url: `${config.serverUrl}/api/homepage?populate=*` })
                setHomePageData(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getHomePageData()
    }, [request, repitRequest]);

    return (
        <>
            <HomePageWrapper style={{ opacity: isLoaded ? 1 : 0 }}>
                <img
                    src={
                        config.appLang === 'RU'
                            ? config.serverUrl + homePageData[0]?.attributes.Img_RU.data.attributes.url
                            : config.serverUrl + homePageData[0]?.attributes.Img_EN.data.attributes.url

                    }
                    alt='homePage'
                />
                <p>{
                    config.appLang === 'RU'
                        ? homePageData[0]?.attributes.Text_RU
                        : homePageData[0]?.attributes.Text_EN
                }</p>
            </HomePageWrapper>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </>
    );
}

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width 1400px;
    margin: 0 auto;
    padding: 30px;

    & > img {
        width: auto;
        max-width: 100%;
        height: 100%;
        max-height: 700px;
        align-self: center;
    }

    & > p {
        font-size: calc(1.2vw + 12px);
        text-indent: 50px;
        margin: 20px 0 0 0;

        @media (min-width: 1920px) {
            font-size: 35px;
        }
    }
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

