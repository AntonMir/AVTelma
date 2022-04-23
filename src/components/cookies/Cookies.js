import { useState } from 'react'
// config
import config from '@config/config.js'
// Link
import { HashLink } from 'react-router-hash-link'
// styled
import styled from 'styled-components'


export default function Cookies() {

    const [cookiesСonsent, setCookiesСonsent] = useState(localStorage.getItem('cookiesСonsent'));
    const [loaded, setLoaded] = useState(false);

    function cookiesСonsentHandler() {
        localStorage.setItem('cookiesСonsent', 'accepted')
        setCookiesСonsent(localStorage.getItem('cookiesСonsent'))
    }

    let showEL = {
        transform: 'translateX(0)',
        opacity: 1,
        zIndex: 9999
    }

    setTimeout(() => { setLoaded(true) }, 4000)

    return (
        <CookiesStyled style={(cookiesСonsent === null && loaded === true) ? showEL : {}}>
            <Text>
                {config.appLang === 'EN'
                    ? `This site does not use cookies and services for collecting technical 
                    data of visitors (data about IP address, location, etc.).`
                    : `Этот сайт не использует файлы cookies и сервисы сбора технических
                    данных посетителей (данные об IP-адресе, местоположении и др.).`
                }
            </Text>
            <BtnBlock>
                <Btn onClick={cookiesСonsentHandler}>
                    {config.appLang === 'EN'
                        ? 'Accept'
                        : 'Принять'
                    }
                </Btn>
                <CustomLink onClick={cookiesСonsentHandler} to="/privacy-policy#top">
                    {config.appLang === 'EN'
                        ? `Privacy Policy`
                        : `Политика конфиденциальности`
                    }
                </CustomLink>
            </BtnBlock>
        </CookiesStyled>
    )
}


const CookiesStyled = styled.div`
    position: fixed;
    top: 100px;
    left: 40px;
    padding: 20px;
    max-width: 400px;
    background-color: rgba(0,146,168, 0.8);
    color: #eee;
    z-index: -9999;
    border-radius: 10px;
    transition: all 0.5s ease 0.1s;
    transform: translateY(-50px);
    opacity: 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 991px) {
        max-width: 300px;
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;
        left: 0;
        top: auto;
        bottom: 0;
        border-radius: 0;
        background-color: rgba(0,146,168, 0.9);
        transform: translateY(100px);
    }
`

const Text = styled.p`
    margin-top: 0;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    font-size: calc(0.5vw + 5px);

    @media screen and (min-width: 1920px) {
        font-size: 14.6px;
    }

    @media screen and (max-width: 600px) {
        font-size: calc(1vw + 10px);
    }
`

const BtnBlock = styled.div`
    display: flex;
    justify-content: space-around;
`

const Btn = styled.button`
    color: #eee;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    background-color: rgba(0,181,214, 0.5);
    padding: 5px 10px;
    cursor: pointer;
    font-size: calc(0.5vw + 5px);

    :hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 1920px) {
        font-size: 14.6px;
    }

    @media screen and (max-width: 600px) {
        font-size: calc(1vw + 10px);
    }
`

const CustomLink = styled(HashLink)`
    color: #eee;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    background-color: rgba(0,181,214, 0.5);
    padding: 5px 10px;
    font-size: calc(0.5vw + 5px);

    :hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 1920px) {
        font-size: 14.6px;
    }

    @media screen and (max-width: 600px) {
        font-size: calc(1vw + 10px);
    }
`
