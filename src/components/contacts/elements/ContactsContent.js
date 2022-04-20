import { useState, useEffect } from 'react'
// img
import hcwhyEN from '@img/contacts/hcwhyEN.webp'
import hcwhyRU from '@img/contacts/hcwhyRU.webp'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function ContactsContent(props) {
    const [contactsList, setContactsList] = useState({});
    const [repitRequest, setRepitRequest] = useState(false)

    // используем наш хук для запроса контактов
    const { request, isLoaded } = useHttp()

    // При первой отрисовке получаем все контакты
    useEffect(() => {
        async function getContacts() {
            try {
                // получаем список контактов и закидываем в state
                const data = await request({ url: `${config.serverUrl}/api/contacts?populate=*` })
                setContactsList(data.data)
            } catch (error) {
                setTimeout(() => setRepitRequest(!repitRequest), 2000)
            }
        }
        getContacts()
    }, [request, repitRequest]);

    useEffect(() => {
        props.collbackLoading(isLoaded)
    }, [isLoaded, props])


    return (
        <ContactsContentStyled>
            <Img src={config.appLang === 'RU' ? hcwhyRU : hcwhyEN} />
            <Title>
                {config.appLang === 'RU' ? 'Контактная информация' : 'Contact Information'}
            </Title>
            <ContactsListWrapper>
                {(contactsList && contactsList.length > 0) && contactsList.map(el => {

                    const contact = config.appLang === 'RU'
                        ? {
                            name: el.attributes.Name_RU,
                            value: el.attributes.Value_RU,
                        }
                        : {
                            name: el.attributes.Name_EN,
                            value: el.attributes.Value_EN,
                        }

                    return (
                        <ContactStyled key={el.id}>
                            <Name>{contact.name}:</Name>
                            <Value> &nbsp; {contact.value}</Value>
                        </ContactStyled>
                    )
                })}
            </ContactsListWrapper>
        </ContactsContentStyled>
    )
}

const ContactsContentStyled = styled.div`

`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const Title = styled.p`
    font-size: calc(1.2vw + 19px);

    @media (min-width: 1920px) {
        font-size: 42px;
    }
`

const ContactsListWrapper = styled.div`
`

const ContactStyled = styled.div`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: calc(1.2vw + 12px);

        @media (min-width: 1920px) {
            font-size: 35px;
        }
    }
`

const Name = styled.p`
    margin: 0;
`

const Value = styled.p`
    margin: 0;
    text-align: left;
    min-width: calc(90% - 50px);
`
