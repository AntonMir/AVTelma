// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styles
import styled from 'styled-components'

// Смена локализации EN/RU
const navList = config.appLang === 'RU'
    ? ['', 'Новости', 'Продукты & Решения', 'О Нас', 'Контакты']
    : ['', 'News', 'Products & Solutions', 'AboutUs', 'Contacts']


export default function Nav() {

    return (
        <NavStyled>
            <NavList>
                <NavEl className="header-nav-el">
                    <CustomLink to="/products#top" smooth>
                        {navList[2]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/news#top" smooth>
                        {navList[1]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/aboutus#top" smooth>
                        {navList[3]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/contacts#top" smooth>
                        {navList[4]}
                    </CustomLink>
                </NavEl>
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;

    @media (max-width: 991px) {
        margin-top: 80px;
        flex: 0;
    }
`

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NavEl = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 15px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    height: 80px;

    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        border-bottom: 7px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 60%;
            border-bottom: 7px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }

    @media (max-width: 991px) {
        margin: 0;
        height: 40px;

        &:before,
        &:after {
            display: none;
        }
    }
`

const CustomLink = styled(HashLink)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    font-size: calc(0.6vw + 6px);

    @media (max-width: 1130px) {
        font-size: 13px;
    }

    @media (max-width: 991px) {
        color: #000;
    }
`
