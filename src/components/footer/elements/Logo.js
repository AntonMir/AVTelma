// Link
import { HashLink } from 'react-router-hash-link'
// img
import logo from '@img/footer/logo.png'
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 1% 4% 0;
    cursor: auto;
    max-height: 33px;

    @media (max-width: 450px) {
        margin-top: 40px;
    }
`

const Img = styled.img`
    width: auto;
    max-height: 100%;
    cursor: pointer;
`
