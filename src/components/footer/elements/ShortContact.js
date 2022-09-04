// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function ShortContact(props) {

    let contact = {}

    switch(config.appLang){
        case 'RU':
            contact = {
                img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
                value: props.contact.attributes.Value_RU,
            }
            break
        case 'AM':
            contact = {
                img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
                value: props.contact.attributes.Value_AM,
            }
            break
        default:
            contact = {
                img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
                value: props.contact.attributes.Value_EN,
            }
            break
    }

    return (
        <ShortContactComponent>
            <Img src={contact.img} alt="img" />
            <Value> &nbsp; {contact.value}</Value>
        </ShortContactComponent>
    )
}

const ShortContactComponent = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 calc(0.5vw + 15px);
`

const Img = styled.img`
    margin-right: 15px;
    height: calc(0.3vw + 30px);
    width: auto;
`

const Value = styled.p`
    flex: 1;
    margin: 0;
    text-align: left;
    font-size: calc(0.3vw + 14px);
    letter-spacing: -0.02em;
    color: #ccc;

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`
