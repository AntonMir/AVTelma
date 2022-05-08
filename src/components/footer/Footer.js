// img
import chipNeon from '@img/footer/chipNeon.svg'
// components
import FooterContent from '@footer/elements/FooterContent.js'
import Gif from '@footer/elements/Gif.js'
import CopyrightNotice from '@footer/elements/CopyrightNotice.js'
// styled
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterBackground>
            <FooterComponent>
                <FooterContent />
                <Gif />
            </FooterComponent>
            <CopyrightNotice />
            <ChipNeon src={chipNeon} alt='img' />
        </FooterBackground>
    )
}

const FooterBackground = styled.div`
    position: relative;
    background-color: #002C33;
`

const FooterComponent = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 5% 0 8%;

    
    @media (max-width: 1599px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
    }
    @media (max-width: 991px) {
        max-width: 750px;
        padding: 20% 8% 25%;
    }
    @media (max-width: 600px) {
        padding: 20% 8% 40%;
    }
`

const ChipNeon = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    max-height: calc(15% + 10vw);
    width: auto;
`