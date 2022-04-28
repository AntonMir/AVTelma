import { useState } from 'react'
// img
import spinner from '@img/global/spinner.svg'
// style
import styled from 'styled-components'


export default function Illustration(props) {

    const { img, UID } = props;

    const [isLoaded, setIsLoaded] = useState(false);

    const changeNewsPostUIDHandler = () => {
        localStorage.setItem('newsPageUID', UID)
    }

    return (
        <IllustrationStylde>
            <RightTopRec isLoaded={isLoaded} />
            <a onClick={changeNewsPostUIDHandler} href={window.location.origin + '/news/' + UID + '#top'}>
                <Img
                    onLoad={() => setIsLoaded(true)}
                    src={img}
                    loading='lazy'
                    alt="img"
                    isLoaded={isLoaded}
                />
                {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
            </a>

            <LeftBotRec isLoaded={isLoaded} />
        </IllustrationStylde >
    );
}

const IllustrationStylde = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 34%;
    margin: auto;
    padding: 0.5% 0.6% 0.1%;

    @media (max-width: 991px) {
        max-width: 45%;
        margin-top: 20px;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        padding: 2% 2% 0.1%;
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
            transform: scale(1.07)
        }
    }
`

const Spinner = styled.img`
    height: auto;
    width: 40%;
    margin: 80px auto;
`


const RightTopRec = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 50%;
    background-color: #13A9D1;
    z-index: -1;
    opacity: ${(props) => props.isLoaded ? 1 : 0};

    @media (max-width: 1440px) {
        width: 10%;
    }
    @media (max-width: 991px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 14%;
    }
`
const LeftBotRec = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10%;
    height: 50%;
    background-color: #13A9D1;
    z-index: -1;
    opacity: ${(props) => props.isLoaded ? 1 : 0};

    @media (max-width: 1440px) {
        width: 10%;
    }
    @media (max-width: 991px) {
        width: 12%;
    }
    @media (max-width: 600px) {
        width: 14%;
    }
`
