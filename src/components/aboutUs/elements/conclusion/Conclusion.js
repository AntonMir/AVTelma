//components
import Text from '@aboutus/elements/conclusion/Text.js'
import Illustration from '@aboutus/elements/conclusion/Illustration.js'
// img 
import chipNeon from '@img/aboutUs/conclusion/chipNeon.svg'
//styled
import styled from 'styled-components'

export default function Conclusion() {

    return (
        <ConclusionComponent>
            <Illustration />
            <Text />
            <ChipNeon src={chipNeon} alt='img' />
        </ConclusionComponent>
    )
}

const ConclusionComponent = styled.div`
    position: relative;
    display: flex;
    padding-bottom: calc(5vw + 80px);


    @media (max-width: 600px) {
        flex-direction: column;
        padding-bottom: calc(5vw + 80px);
    }
`

const ChipNeon = styled.img`
    position: absolute;
    bottom: 0;
    right: 5%;
    width: 25%;
    height: auto;

    @media (max-width: 991px) {
        width: 33%;
    }

    @media (max-width: 600px) {
        width: 40%;
    }
`