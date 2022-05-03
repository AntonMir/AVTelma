//components
import Text from '@aboutus/elements/introduction/Text.js'
import Illustration from '@aboutus/elements/introduction/Illustration.js'
//styled
import styled from 'styled-components'

export default function Introduction() {

    return (
        <IntroductionComponent>
            <Text />
            <Illustration />
        </IntroductionComponent>
    )
}

const IntroductionComponent = styled.div`
    margin: calc(4vw + 30px) 0 calc(4vw + 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`