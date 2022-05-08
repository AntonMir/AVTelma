import { useState } from 'react'
// img
import hcwhyEN from '@img/contacts/hcwhyEN.webp'
import hcwhyRU from '@img/contacts/hcwhyRU.webp'
import spinner from '@img/global/spinner.svg'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function Illustration() {

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <Img
                src={config.appLang === 'RU' ? hcwhyRU : hcwhyEN}
                onLoad={() => setIsLoaded(true)}
                alt="img"
                isLoaded={isLoaded}
            />
            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </>
    )
}

const Img = styled.img`
    height: auto;
    max-width: 60%;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: auto;
    min-height: 200px;
    opacity: 0.9;

    > img {
        max-width: calc(3vw + 20px);
        height: auto;
    }

    @media (max-width: 991px) {
        width: 100%;
    }
`
