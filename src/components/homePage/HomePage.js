// import { useEffect, useState } from 'react'
//components
import Greeting from '@homePage/elements/Greeting.js'
import Products from '@homePage/elements/products/Products.js'
import News from '@homePage/elements/news/News.js'
import Slogan from '@homePage/elements/Slogan.js'
// img
// import spinner from '@img/global/spinner.svg'
// hooks
// import { useHttp } from '@hooks/http.hook.js'
// config
// import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function HomePage() {


    return (
        <HomePageStyled>
            <Greeting />

            <Anchor id="homePageProducts" />
            <Products />

            <Anchor id="homePageSlogan" />
            <Slogan />

            <Anchor id="homePageNews" />
            <News />

        </HomePageStyled>
    );
}

const HomePageStyled = styled.div`
    margin-top: -76px;

    @media (max-width: 1200px) {
        margin-top: -66px;
    }
    @media (max-width: 800px) {
        margin-top: -61px;
    }
`

const Anchor = styled.div`
    height: 80px;
    // background-color: red; 
    @media (max-width: 991px) {
        height: 70px;
    }
    @media (max-width: 800px) {
        height: 65px;
    }
`


