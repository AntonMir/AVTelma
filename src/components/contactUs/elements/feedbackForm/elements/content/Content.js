//components
import Form from '@contactUs/elements/feedbackForm/elements/content/Form.js'
import Illustration from '@contactUs/elements/feedbackForm/elements/content/Illustration.js'
// styled
import styled from 'styled-components'


export default function Content() {

    return (
        <ContentComponent>
            <Form />
            <Illustration />
        </ContentComponent>
    )
}

const ContentComponent = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`