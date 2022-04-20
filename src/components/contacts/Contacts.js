import { useState } from 'react'
// components
import ContactsContent from '@contacts/elements/ContactsContent.js'
import FeedbackForm from '@contacts/elements/FeedbackForm.js'
// img 
import spinner from '@img/global/spinner.svg'
//styled
import styled from 'styled-components'

export default function Contacts() {

    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>
            <ContactsStyled style={{ opacity: isLoaded ? 1 : 0 }}>
                <ContactsContent collbackLoading={setIsLoaded} />
                <FeedbackForm />
            </ContactsStyled>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}
        </>
    )
}

const ContactsStyled = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px;
`

const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #ccc;
    opacity: 0.9;
`