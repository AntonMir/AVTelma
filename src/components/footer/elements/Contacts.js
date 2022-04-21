// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// Смена локализации EN/RU
const contactsList = config.appLang === 'RU'
    ? ['Контакты:', 'support@avtelma.ru', '+7-495-797-17-91', 'Политика конфиденциальности']
    : ['Contacts:', 'support@avtelma.com', '+3-749-159-23-24', 'Privacy policy']

export default function Contacts() {

    return (
        <ContactsStyled>
            <ContactEl>{contactsList[0]}</ContactEl>
            <ContactEl>{contactsList[1]}</ContactEl>
            <ContactEl><a href="tel:+74957971791">{contactsList[2]}</a></ContactEl>
            <ContactEl><HashLink to="/privacy-policy#top">{contactsList[3]}</HashLink></ContactEl>
        </ContactsStyled>
    )
}

const ContactsStyled = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
`

const ContactEl = styled.li`
    color: #ccc;
    font-size: calc(0.2vw + 15px);
    line-height: 38px;
    letter-spacing: -0.02em;

    & > a {
        color: #ccc;
    }

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`