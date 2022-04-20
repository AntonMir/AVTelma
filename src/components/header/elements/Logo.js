import { useState } from 'react'
// Link
import { HashLink } from 'react-router-hash-link'
// img
import logo from '@img/header/logo.svg'
import logoBlack from '@img/header/logoBlack.svg'
// redux
import { store } from '@store/store.js'
// styles
import styled from 'styled-components'

export default function Logo() {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

    store.subscribe(() => {
        setTimeout(() => {
            setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
        }, 300)
    })

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
