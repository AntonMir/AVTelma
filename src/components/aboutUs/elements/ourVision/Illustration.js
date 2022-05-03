import { useState } from 'react'
// img
import telephone from '@img/aboutUs/ourVision/telephone.webp'
import infographicsMan from '@img/aboutUs/ourVision/infographicsMan.svg'
import infographicsMonitor from '@img/aboutUs/ourVision/infographicsMonitor.svg'
import spinner from '@img/global/spinner.svg'
// style
import styled from 'styled-components'


export default function Illustration() {


    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <IllustrationWrapper>
            <ImgWrapper>
                <Img
                    onLoad={() => setIsLoaded(true)}
                    src={telephone}
                    alt="img"
                    isLoaded={isLoaded}
                />
                {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
            </ImgWrapper>

            <InfographicsMan src={infographicsMan} alt="img" />
            <InfographicsMonitor src={infographicsMonitor} alt="img" />
        </IllustrationWrapper >
    );
}

const IllustrationWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`

const ImgWrapper = styled.div`
    display: flex;
    max-width: 80%;

    @media (max-width: 600px) {
        max-width: 85%;
    }
`

const Img = styled.img`
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? 'auto' : '0'};
    width: 100%;
    height: auto;
`

const InfographicsMan = styled.img`
    position: absolute;
    left: 10%;
    bottom: -45%;
    z-index: 2;
    width: 35%;
    height: auto;

    @media (max-width: 991px) {
        left: 5%;
        bottom: -40%;
        width: 50%;
    }

    @media (max-width: 600px) {
        left: 0%;
        bottom: -40%;
        width: 45%;
    }
`

const InfographicsMonitor = styled.img`
    position: absolute;
    left: 55%;
    bottom: -73%;
    z-index: 2;
    width: 35%;
    height: auto;

    @media (max-width: 991px) {
        display: none;
    }
`

const Spinner = styled.img`
    height: auto;
    width: 100%;
    margin: 80px auto;
`
