// components
import Head from '@contactUs/elements/feedbackForm/elements/Head.js'
import Content from '@contactUs/elements/feedbackForm/elements/content/Content.js'
// styled
import styled from 'styled-components'


export default function FeedbackForm() {

    return (
        <FeedbackFormComponent>
            <Head />
            <Content />
        </FeedbackFormComponent>
    )
}

const FeedbackFormComponent = styled.div`
    padding: 0 2%;
    margin: calc(6vw + 45px) 0 calc(3vw + 25px);

    @media (max-width: 991px) {
        padding: 4%;
    }
`
