import { useEffect, useState } from 'react'
// components
import ShortProduct from '@products/elements/ShortProduct.js'
// img
import spinner from '@img/global/spinner.svg'
import search_img from '@img/global/searchImg.png'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function ProductsListPage() {
    const [products, setProducts] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)
    const [searchData, setSearchData] = useState('')

    // используем наш хук для запроса продуктов
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем Продукты
    useEffect(() => {
        async function getProducts() {
            try {
                // получаем список продуктов и закидываем в state
                const data = await request({ url: `${config.serverUrl}/api/products?populate=*` })
                setProducts(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getProducts()
    }, [request, repitRequest]);

    const filteredProducts = (products && products.length > 0) && products.filter(el => {
        const ruFilter = el.attributes.Title_RU.toLowerCase().includes(searchData.toLowerCase())
        const enFilter = el.attributes.Title_EN.toLowerCase().includes(searchData.toLowerCase())
        return ruFilter || enFilter
    })

    return (
        <>
            <Search>
                <SearchForm>
                    <input
                        type="text"
                        placeholder={
                            config.appLang === 'RU'
                                ? 'Поиск по продуктам и решениям...'
                                : 'Search for products and solutions...'
                        }
                        onChange={(event) => setSearchData(event.target.value)}
                    />
                    <img src={search_img} alt="img" />
                </SearchForm>
            </Search>

            <ProductsList style={{ opacity: isLoaded ? 1 : 1 }}>
                <ProductsListWrapper>
                    {(products && products.length > 0) && filteredProducts.map(product => {
                        return <ShortProduct key={product.id} product={product} />
                    })}
                </ProductsListWrapper>
            </ProductsList>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </>
    );
}

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

const ProductsList = styled.div`
    max-width: 1440px;
    margin: 30px auto 30px;
    padding: 0 5px 0 20px;
`

const ProductsListWrapper = styled.div`
    display: flex;
    justify-content: center;
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
