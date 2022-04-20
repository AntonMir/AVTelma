import { useEffect, useState } from 'react'
//components
import Greeting from '@homePage/elements/Greeting.js'
// img
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function HomePage() {


    return (
        <HomePageStyled>
            <Greeting />
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


