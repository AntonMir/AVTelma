// img 
import arrow from '@img/global/arrow.svg'
// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Head() {

    return (
        <HeadStyled>
            <Title>
                <Text>
                    {config.appLang === 'EN'
                        ? 'Other news'
                        : 'Другие новости'
                    }
                </Text>
                <BlueRectangle />
            </Title>
            <LinkToProductsPage to="/news">
                <p>
                    {config.appLang === 'EN'
                        ? 'View all'
                        : 'Все'
                    }
                </p>
                <img src={arrow} alt="img" />
            </LinkToProductsPage>
        </HeadStyled>

    );
}


const HeadStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5vw 0 3vw;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51%;

    @media (max-width: 991px) {
        width: auto;
        max-width: 100%;
        margin-left: 13px;
    }
`

const Text = styled.div`
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

const BlueRectangle = styled.div`
    height: 40%;
    flex: 1;
    background-color: #51CDF2;
    margin-top: 1%;

    @media (max-width: 991px) {
        display: none;
    }
`

const LinkToProductsPage = styled(HashLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    color: #000;
    font-size: calc(0.8vw + 8px);
    font-weight: 300;


    > p {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        white-space: nowrap;
        line-height: 20px;

        :hover {
            border-bottom: 1px solid #000;
        }
    }

    > img {
        width: 25%;
        height: auto;
        margin: 0 0 0 0.4vw;
    }

    @media (min-width: 1920px) {
        font-size: 19px;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`

