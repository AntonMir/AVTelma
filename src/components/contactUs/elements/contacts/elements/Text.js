import { useState, useEffect } from 'react'
// components
import ShortContact from '@contactUs/elements/contacts/elements/ShortContact.js'
// img
import chipNeon from '@img/contacts/chipNeon.svg'
import spinner from '@img/global/spinner.svg'
// hooks
import { useHttp } from '@hooks/http.hook.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function Text() {
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

    return (
        <TextContent>
            <Title>
                {config.appLang === 'RU' ? 'Контакты' : 'Contacts'}
            </Title>
            <ContactsList isLoaded={isLoaded}>
                {(contactsList && contactsList.length > 0) && contactsList.map(contact => {
                    return <ShortContact key={contact.id} contact={contact} />
                })}
            </ContactsList>

            {!isLoaded && <Spinner><img src={spinner} alt="spinner" /></Spinner>}

            <ChipNeon src={chipNeon} alt='img' />
        </TextContent>
    )
}

const TextContent = styled.div`
    position: relative; 
    flex: 1;
    padding: calc(2.5vw + 20px) 0 0 calc(2vw + 15px);
    margin-top: 5%;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    min-height: 13vw;
    

    @media (min-width: 1920px) {
        padding: 70px 0 0 70px;
    }

    @media (max-width: 991px) {
        padding: calc(2vw + 15px);
    }
`


const Title = styled.p`
    margin: 0 0 calc(1vw + 20px) 0;
    line-height: 41px;
    font-size: calc(1.9vw + 19px);
    font-weight: 700;

    @media (min-width: 1920px) {
        font-size: 56px;
    }
    
    @media (max-width: 380px) {
        font-size: calc(1.5vw + 15px);
    }
`

const ContactsList = styled.div`
    opacity: ${(props) => props.isLoaded ? 1 : 0};
    max-height: ${(props) => props.isLoaded ? '100%' : '0px'};
`

const ChipNeon = styled.img`
    height: 35%;
    width: auto;
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: 991px) {
        display: none;
    }
`

const Spinner = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    opacity: 0.9;

    > img {
        max-width: calc(1vw + 14px);
    }
`