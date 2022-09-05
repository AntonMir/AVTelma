import { useState } from 'react'
// Link
import { HashLink } from 'react-router-hash-link'
// img
import logo from '@img/header/logo.svg'
import logoBlack from '@img/header/logoBlack.svg'
import logo_AM from '@img/header/logo_AM.svg'
import logoBlack_AM from '@img/header/logoBlack_AM.svg'
// redux
import { store } from '@store/store.js'
// styles
import styled from 'styled-components'
// config
import config from '../../../config/config'

export default function Logo() {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

    store.subscribe(() => {
        setTimeout(() => {
            setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
        }, 300)
    })

    if(config.appLang === 'AM') {
        return (
            <CustomLink to="/#top" smooth>
                <IMG src={burgerMenuIsOpen ? logoBlack_AM : logo_AM} alt="logo" />
            </CustomLink>
        )
    }
    
    return (
        <CustomLink to="/#top" smooth>
            <IMG src={burgerMenuIsOpen ? logoBlack : logo} alt="logo" />
        </CustomLink>
    )
}

const CustomLink = styled(HashLink)`
    flex: 0;
    display: flex;
    align-items: center;
    padding: 2px 0;
    text-decoration: none;
    user-select: none;
    z-index: 9999;
    height: 76px;
    
    @media (max-width: 1200px) {
        height: 66px;
    }
    @media (max-width: 800px) {
        height: 61px;
    }
`

const IMG = styled.img`
    width: auto;
    height: 45%;
    margin-right: 10px;

    @media (max-width: 1200px) {
        height: 41%;
    }
    @media (max-width: 800px) {
        height: 38%;
    }
`
