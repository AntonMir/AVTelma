// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// Смена локализации EN/RU
const navList = config.appLang === 'RU'
    ? ['Главная', 'Новости', 'Продукты & Решения', 'О Нас', 'Контакты', 'Политика конфиденциальности']
    : ['Home', 'News', 'Products & Solutions', 'AboutUs', 'Contacts', 'Privacy policy']


export default function Nav() {

    return (
        <NavStyled>
            <First>
                <CustomLink to="/#top" smooth>
                    {navList[0]}
                </CustomLink>
                <CustomLink to="/products#top" smooth>
                    {navList[2]}
                </CustomLink>
                <CustomLink to="/news#top" smooth>
                    {navList[1]}
                </CustomLink>
            </First>
            <Second>
                <CustomLink to="/aboutus#top" smooth>
                    {navList[3]}
                </CustomLink>
                <CustomLink to="/contacts#top" smooth>
                    {navList[4]}
                </CustomLink>
                <CustomLink to="/privacy-policy#top" smooth>
                    {navList[5]}
                </CustomLink>
            </Second>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    flex: 1;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const First = styled.div`
   display: flex;
   flex-direction: column;
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
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
