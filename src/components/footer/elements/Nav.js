// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// Смена локализации EN/RU
const navList = config.appLang === 'RU'
    ? ['', 'Новости', 'Продукты & Решения', 'О Нас', 'Контакты']
    : ['', 'News', 'Products & Solutions', 'AboutUs', 'Contacts']


export default function Nav() {

    return (
        <NavStyled>
            <CustomLink to="/products#top" smooth>
                {navList[2]}
            </CustomLink>
            <CustomLink to="/news#top" smooth>
                {navList[1]}
            </CustomLink>
            <CustomLink to="/aboutus#top" smooth>
                {navList[3]}
            </CustomLink>
            <CustomLink to="/contacts#top" smooth>
                {navList[4]}
            </CustomLink>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 450px) {
        margin-bottom: 50px;
    }
`

const CustomLink = styled(HashLink)`
    color: #ccc;
    font-size: calc(0.3vw + 14px);

    line-height: 38px;
    letter-spacing: -0.02em;

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`
