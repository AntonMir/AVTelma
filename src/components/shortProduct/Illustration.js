import { useState } from 'react'
// img
import spinner from '@img/global/spinner.svg'
// style
import styled from 'styled-components'


export default function Illustration(props) {

    const { img, url } = props;

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <IllustrationStylde>
            <a href={url}>
                <Img
                    onLoad={() => setIsLoaded(true)}
                    src={img}
                    loading='lazy'
                    alt="img"
                    isLoaded={isLoaded}
                />
                {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
            </a>
        </IllustrationStylde>
    );
}

const IllustrationStylde = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 48%;
    margin: auto;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? 'auto' : '0'};
    z-index: 100;
    transition: transform 0.3s ease;
    cursor: pointer;

    @media (min-width: 600px) {
        :hover {
            transform: scale(1.02)
        }
    }
`

const Spinner = styled.img`
    height: auto;
    width: 40%;
    margin: 80px auto;
`