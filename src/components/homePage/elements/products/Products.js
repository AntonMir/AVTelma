import { useEffect, useState } from 'react'
//components
import ShortProduct from '@homePage/elements/products/ShortProduct/ShortProduct.js'
// img 
import arrow from '@img/homePage/products/arrow.svg'
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Products() {
    const [products, setProducts] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса продуктов
    const { request, isLoaded } = useHttp()

    // Получаем Продукты
    useEffect(() => {
        async function getProducts() {
            try {
                // получаем список продуктов и закидываем в state
                const data = await request({
                    url: `${config.serverUrl}/api/products?populate=*&pagination[limit]=2&sort=publishedAt:desc`
                })
                setProducts(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getProducts()
    }, [request, repitRequest]);

    return (
        <ProductsStyled>
            <Head>
                <Title>
                    <Text>
                        {config.appLang === 'EN'
                            ? 'Solutions & Products'
                            : 'Продукты и решения'
                        }
                    </Text>
                    <BlueRectangle />
                </Title>
                <LinkToProductsPage to="/products">
                    <p>
                        {config.appLang === 'EN'
                            ? 'View all'
                            : 'Смотреть все'
                        }
                    </p>
                    <img src={arrow} alt="img" />
                </LinkToProductsPage>
            </Head>

            <ProductsList>
                {(products && products.length > 0) && products.map(product => {
                    return <ShortProduct key={product.id} product={product} />
                })}
            </ProductsList>
        </ProductsStyled>
    );
}

const ProductsStyled = styled.div`
    margin: 0 auto calc(1.5vw + 15px);
    max-width: 1440px;

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
        padding: 0 5%;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7%;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51%;

    @media (max-width: 991px) {
        width: auto;
        max-width: 100%;
        margin-left: 13px;
    }
`

const Text = styled.div`
    font-size: calc(1.9vw + 19px);
    font-weight: 700;
    margin: 0 5% 0 0;
    text-indent: 1.2vw;
    white-space: nowrap;

    @media (min-width: 1920px) {
        font-size: 56px;
    }

    // @media (max-width: 1600px) {
    //     font-size: calc(1.7vw + 17px);
    // }

    @media (max-width: 380px) {
        font-size: calc(1.5vw + 15px);
    }
`

const BlueRectangle = styled.div`
    height: 40%;
    flex: 1;
    background-color: #51CDF2;
    margin-top: 1%;

    @media (max-width: 991px) {
        display: none;
    }
`

const LinkToProductsPage = styled(HashLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    color: #000;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    line-height: 15px;
    font-size: calc(0.5vw + 5.4px);
    font-weight: 300;

    :hover {
        border-bottom: 1px solid #000;
    }

    > p {
        flex: 1;
    }

    > img {
        width: 13%;
        height: auto;
    }

    @media (max-width: 1920px) {
        font-size: 15px;
    }
`

const ProductsList = styled.div`

`

