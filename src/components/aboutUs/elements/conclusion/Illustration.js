// img
import infographics from '@img/aboutUs/conclusion/infographics.svg'
// style
import styled from 'styled-components'


export default function Illustration() {

    return (
        <IllustrationWrapper>
            <Infographics src={infographics} alt="img" />
        </IllustrationWrapper >
    );
}

const IllustrationWrapper = styled.div`
    display: flex;
    width: calc(10vw + 150px);

    @media (max-width: 600px) {
        margin-bottom: calc(1vw + 10px);
    }
`

const Infographics = styled.img`
    z-index: 2;
    width: 100%;
    height: auto;
`

