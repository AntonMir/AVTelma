import { useEffect, useState } from 'react'
//components
import ShortProduct from '@products/elements/ShortProduct/ShortProduct.js'
import Head from '@products/elements/Head.js'
// img 
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
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
                    url: `${config.serverUrl}/api/products?populate=*&sort=publishedAt:desc`
                })
                setProducts(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getProducts()
    }, [request, repitRequest]);

    return (
        <ProductsWrapper>
            <Head />

            <ProductsList isLoaded={isLoaded}>
                {(products && products.length > 0) && products.map(product => {
                    return <ShortProduct key={product.id} product={product} />
                })}
            </ProductsList>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}

        </ProductsWrapper>
    );
}

const ProductsWrapper = styled.div`
   position: relative;
`

const ProductsList = styled.div`
    max-width: 1440px;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? '60px auto' : '0'};

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
