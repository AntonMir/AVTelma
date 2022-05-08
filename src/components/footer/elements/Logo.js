// Link
import { HashLink } from 'react-router-hash-link'
// img
import logo from '@img/footer/logo.svg'
// styled
import styled from 'styled-components'

export default function Logo() {
    return (
        <LogoStyled to="#top" smooth>
            <Img src={logo} alt="logo" />
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
