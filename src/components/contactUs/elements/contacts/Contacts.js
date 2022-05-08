// components
import Text from '@contactUs/elements/contacts/elements/Text.js'
import Illustration from '@contactUs/elements/contacts/elements/Illustration.js'
// styled
import styled from 'styled-components'

export default function ContactsContent() {

    return (
        <ContactsContentStyled>
            <Text />
            <Illustration />
        </ContactsContentStyled>
    )
}

const ContactsContentStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 991px) {
        flex-direction: column-reverse;
    }
`