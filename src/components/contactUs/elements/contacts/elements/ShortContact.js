// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function ShortContact(props) {

    const contact = config.appLang === 'EN'
        ? {
            img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
            value: props.contact.attributes.Value_EN,
        }
        : {
            img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
            value: props.contact.attributes.Value_RU,
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
    justify-content: space-between;
    align-items: center;
    margin: 0 0 calc(1vw + 5px);
`

const Img = styled.img`
    margin: 0;
    height: 100%;
    width: auto;
`

const Value = styled.p`
    margin: 0;
    text-align: left;
    min-width: calc(90% - 10px);
    font-size: calc(1vw + 10px);
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 29px;
    }
    
    @media (max-width: 600px) {
        font-size: calc(1.3vw + 13px);
    }
`
