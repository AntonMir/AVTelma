// img 
import arrow from '@img/contacts/arrow.svg'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Head() {

    return (
        <HeadContent>
            <UserPosNav>
                <HashLink to="/">
                    {config.appLang === 'RU'
                        ? 'Главная'
                        : 'Home'
                    }
                </HashLink>
                <img src={arrow} alt="img" />
                <p>
                    {config.appLang === 'RU'
                        ? 'Контакты'
                        : 'Contact us'
                    }
                </p>
            </UserPosNav>
        </HeadContent>
    );
}

const HeadContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin: 20px 0 10px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 991px) {
        max-width: 750px;
    }
`

const UserPosNav = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.2vw;
    opacity: 0.7;

    font-size: calc(0.6vw + 6px);
    font-weight: 300;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
        opacity: 0.9;
    }

    // path elements
    > a {
        text-decoration: none;
        color: #888;
        :hover {
            text-decoration: underline 1px;
        }
    }

    // arrow
    > img {
        margin: 0 5px 0 8px;
        max-height: calc(0.3vw + 5px);
        width: auto;
    }

    // current page
    > p {
        color: #888;
    }

`
