import React, { useState, useEffect } from 'react'
// components
import Logo from '@header/elements/Logo.js'
import Nav from '@header/elements/Nav.js'
import LanguageChanger from '@header/elements/LangChanger.js'
import BurgerBtn from '@header/elements/BurgerBtn.js'
// redux
import { store } from '@store/store.js'
import { changeBurgerMenu } from '@store/actions.js'
// img
import wave from '@img/header/wave.svg'
// config
import config from '@config/config.js'
// styles
import styled from 'styled-components'

// анимация появления навигации на мобилке
const visible = {
    height: '100vh',
    opacity: 1,
}

// появление Header при заходе на сайт
const showEL = {
    transform: 'translateX(0)',
    opacity: 1
}

export default function Header() {

    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
    const [loadedEl, setLoadedEl] = useState(false);


    function onLoadEL() {
        setLoadedEl(true);
    }

    setTimeout(onLoadEL, 500)

    useEffect(() => {
        let isMounted = true
        store.subscribe(() => {
            if (isMounted) {
                setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
            }
        })
        return () => {
            isMounted = false
        }
    }, [])

    function closeBurgerMenu() {
        if (store.getState().burgerMenuIsOpen) {
            store.dispatch(changeBurgerMenu(false))
        }
    }

    return (
        <HeaderStyled onClick={closeBurgerMenu} style={loadedEl ? showEL : {}}>
            <HeaderElWrapper>
                <Logo />
                <HeaderPopUpWrapper
                    style={burgerMenuIsOpen ? visible : {}}
                    lang={config.appLang}
                // style={config.appLang === 'EN' ? { flex: 0 } : {}}
                >
                    <Nav />
                    {config.appLang === 'RU' && <LanguageChanger />}
                </HeaderPopUpWrapper>
                <BurgerBtn />
            </HeaderElWrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    margin: 0;
    padding: 0;
    background-color: #1F4E5C;
    transition: all 1.3s ease;
    transform: translateY(-50px);
    opacity: 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`

const HeaderElWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;
    
    @media (max-width: 1599px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }
    @media (max-width: 991px) {
        max-width: 750px;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`

const HeaderPopUpWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: ${(props) => `${props.lang === 'EN' ? 0 : 1}`};
    height: 100%;
    transition: height 0.3s ease-out, opacity 0.5s ease-out;

    @media (max-width: 991px) {
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;
        background-color: #fff;
        width: 100vw;
        height: 0;
        opacity: 0;
        background-image: url(${wave}) !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: 100% auto !important;
    }
`
