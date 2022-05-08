// components
import Logo from '@footer/elements/Logo.js'
import Contacts from '@footer/elements/Contacts.js'
import Nav from '@footer/elements/Nav.js'
// styled
import styled from 'styled-components'

export default function FooterContent() {
    return (
        <FooterContentComponent>
            <Logo />
            <Nav />
            <Contacts />
        </FooterContentComponent>
    )
}

const FooterContentComponent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`
