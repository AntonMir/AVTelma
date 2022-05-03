import { useState } from 'react'
// img
import notebook from '@img/aboutUs/introduction/notebook.webp'
import infographics from '@img/aboutUs/introduction/infographics.svg'
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
                    src={notebook}
                    alt="img"
                    isLoaded={isLoaded}
                />
                {!isLoaded && <Spinner src={spinner} alt="spinner" loading='lazy' />}
            </ImgWrapper>

            <Infographics src={infographics} alt="img" />
        </IllustrationWrapper >
    );
}

const IllustrationWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`

const ImgWrapper = styled.div`
    display: flex;
    max-width: 80%;
`

const Img = styled.img`
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
    margin: ${(props) => props.isLoaded ? 'auto' : '0'};
    width: 100%;
    height: auto;
`

const Infographics = styled.img`
    position: absolute;
    left: 3%;
    bottom: -20%;
    z-index: 2;
    width: 35%;
    height: auto;

    @media (max-width: 600px) {
        width: 40%;
        left: 0%;
        bottom: -25%;
    }
`

const Spinner = styled.img`
    height: auto;
    width: 100%;
    margin: 80px auto;
`
