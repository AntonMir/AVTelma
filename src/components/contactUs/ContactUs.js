// components
import Head from '@contactUs/elements/Head.js'
import Contacts from '@contactUs/elements/contacts/Contacts.js'
import FeedbackForm from '@contactUs/elements/feedbackForm/FeedbackForm.js'
//styled
import styled from 'styled-components'

export default function ContactUs() {

    return (
        <ContactUsStyled>
            <Head />
            <Contacts />
            <FeedbackForm />
        </ContactUsStyled>
    )
}

const ContactUsStyled = styled.div`
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 991px) {
        max-width: 750px;
    }

    @media (max-width: 800px) {
        padding: 0 2%;
    }
    
    @media (max-width: 600px) {
        padding: 0 5%;
    }
`