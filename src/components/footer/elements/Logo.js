// Link
import { HashLink } from 'react-router-hash-link'
// img
import logo from '@img/footer/logo.svg'
import logo_AM from '@img/footer/logo_AM.svg'
// styled
import styled from 'styled-components'
// config
import config from '@config/config'

export default function Logo() {
    return (
        <LogoStyled to="#top" smooth>
            <Img src={config.appLang === 'AM' ? logo_AM : logo} alt="logo" />
        </LogoStyled>
    )
}

const LogoStyled = styled(HashLink)`
    cursor: auto;

    @media (max-width: 991px) {
        margin-bottom: 5%;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 250px;
    cursor: pointer;
`
