// img 
import background from '@img/news/background.webp'
import arrow from '@img/news/arrow.svg'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Head() {

    return (
        <HeadBackground>
            <HeadWrapper>
                <BlackRectangle>
                    <HeadContent>
                        <UserPosNav>
                            <HashLink to="/">
                                {config.appLang === 'EN'
                                    ? 'Home'
                                    : 'Главная'
                                }
                            </HashLink>
                            <img src={arrow} alt="img" />
                            <h6>
                                {config.appLang === 'EN'
                                    ? 'News'
                                    : 'Новости'
                                }
                            </h6>
                        </UserPosNav>
                        <Title>
                            {config.appLang === 'EN'
                                ? 'Company News'
                                : 'Новости компании'
                            }
                        </Title>
                    </HeadContent>
                </BlackRectangle>
            </HeadWrapper>
        </HeadBackground>
    );
}

const HeadBackground = styled.div`
    background-image: url(${background});
    background-color: #0278A4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
`

const HeadWrapper = styled.div`
    padding-left: 1vw;
    margin: 0 auto;
    max-width: 1440px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 991px) {
        max-width: 750px;
    }

    @media (max-width: 600px) {
        padding-left: 5vw;
    }

`

const BlackRectangle = styled.div`
    display: inline-block;
    background: rgba(1, 39, 49, 0.5);
    padding: 0 5% 0 3.5%;

    @media (max-width: 768px) {
        padding: 0 7vw 0 5.5vw;
    }
`

const HeadContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(7vw + 100px);
    min-height: 150px;
    max-height: 256px;
    color: #fff;

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
    line-height: 20px;

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
        color: #fff;
        white-space: nowrap;
        :hover {
            text-decoration: underline 1px;
        }
    }

    // arrow
    > img {
        margin: 0 5px 0 8px;
        height: 50%;
        width: auto;
        @media (max-width: 768px) {
            height: 30%;
        }
    }

    // curent page
    > h6 {
        margin: 0;
        font-weight: 300;

        :hover {
            cursor: default;
        }

        @media (min-width: 1920px) {
            font-size: 18px;
        }
    
        @media (max-width: 768px) {
            font-size: calc(0.8vw + 8px);
        }
    }
`

const Title = styled.div`
    font-size: calc(1.9vw + 19px);
    font-weight: 700;
    margin: 0 5% 0 0;
    text-indent: 1.2vw;
    white-space: nowrap;

    @media (min-width: 1920px) {
        font-size: 56px;
    }
    
    @media (max-width: 380px) {
        font-size: calc(1.5vw + 15px);
    }
`