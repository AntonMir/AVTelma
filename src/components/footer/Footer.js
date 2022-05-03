import React from 'react'
// img
import logoGif from '@img/footer/logoGif.gif'
import chipNeon from '@img/footer/chipNeon.svg'
// components
import Logo from '@footer/elements/Logo.js'
import Contacts from '@footer/elements/Contacts.js'
import Nav from '@footer/elements/Nav.js'
// styled
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterStyled>
            <Logo />
            <NavBarWrapper>
                <Nav />
                <Contacts />
            </NavBarWrapper>

            <ContactsWrapper>
                <Img src={logoGif} alt="logoGif" />
            </ContactsWrapper>
            <ChipNeon src={chipNeon} alt='img' />
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    
    display: flex;
    justify-content: space-around;
    background-color: #002c33;
    margin-top: 0;
    padding: 5% 10% 5% 10%;

    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 8% 5% 2% 6%;
    }
`

const NavBarWrapper = styled.span`
    display: flex;
    justify-content: space-evenly;
    flex: 1;

    @media (max-width: 1200px) {
        margin: 70px;
    }

    @media (max-width: 600px) {
        margin: 50px 10px 50px 35px;
    }

    @media (max-width: 450px) {
        margin: 50px 0 50px 45px;
        flex-direction: column;
    }

    @media (max-width: 350px) {
        margin: 50px 0 50px 20px;
        flex-direction: column;
    }
`
const ContactsWrapper = styled.span`
    display: flex;
    justify-content: space-around;

    @media (max-width: 1200px) {
        margin: 0 70px 70px;
    }

    @media (max-width: 600px) {
        margin: 0 0 50px;
    }
`

const Img = styled.img`
    width: auto;
    height: 150px;

    @media (max-width: 450px) {
        height: 100px;
    }
`

const ChipNeon = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    max-height: calc(15% + 10vw);
    width: auto;
`