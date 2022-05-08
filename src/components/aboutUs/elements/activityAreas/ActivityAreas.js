//components
import Head from '@aboutus/elements/activityAreas/elements/Head.js'
import SmartEl from '@aboutus/elements/activityAreas/elements/SmartEl.js'
// img
import smartInsurance from '@img/aboutUs/activityAreas/smart_isurance_infographics.svg'
import smartWatch from '@img/aboutUs/activityAreas/smart_watch_infographics.svg'
import smartHome from '@img/aboutUs/activityAreas/smart_home_infographics.svg'
import smartTraffic from '@img/aboutUs/activityAreas/smart_traffic_infographics.svg'
import center from '@img/aboutUs/activityAreas/center.svg'
// config
import config from '@config/config.js'
//styled
import styled from 'styled-components'

const data = config.appLang === "EN"
    ? [
        {
            id: 0,
            title: `SmartInsurance`,
            text: `Pay-as-you go and Pay-how-you-drive insurance approach in a single device`,
            img: smartInsurance
        },
        {
            id: 1,
            title: `SmartWatch`,
            text: `Activity monitor`,
            img: smartWatch
        },
        {
            id: 2,
            title: `Indoor Positioning system for SmartHomes`,
            text: `Bring your personality in your smarthome and make it recognize you`,
            img: smartHome
        },
        {
            id: 3,
            title: `SmartTraffic`,
            text: `Improve your driving experience by precise knowledge of traffic lights system`,
            img: smartTraffic
        }
    ]
    : [
        {
            id: 0,
            title: `SmartInsurance`,
            text: `Подход к страхованию с оплатой по ходу движения и оплатой по мере движения в одном устройстве`,
            img: smartInsurance
        },
        {
            id: 1,
            title: `SmartWatch`,
            text: `Монитор активности`,
            img: smartWatch
        },
        {
            id: 2,
            title: `Indoor Positioning system for SmartHomes`,
            text: `Привнесите свою индивидуальность в свой smarthome и заставьте его узнать вас`,
            img: smartHome
        },
        {
            id: 3,
            title: `SmartTraffic`,
            text: `Улучшите свой опыт вождения за счет точного знания системы светофоров`,
            img: smartTraffic
        }
    ]


export default function ActivityAreas() {

    return (
        <ActivityAreasComponent>
            <Head />
            <Content>
                {(data && data.length > 0) && data.map(el => {
                    return <SmartEl key={el.id} el={el} />
                })}
            </Content>
        </ActivityAreasComponent>
    )
}

const ActivityAreasComponent = styled.div`
    margin-bottom: calc(3vw + 50px);
`

const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(100px, auto));
    grid-template-columns: repeat(2, minmax(100px, auto)); 
    grid-column-gap: 20vw;
    grid-row-gap: calc(450px - 15vw);

    background-image: url(${center});
    background-position: 50% 47%;
    background-repeat: no-repeat;
    background-size: 50%;

    @media (min-width: 1920px) {
        grid-column-gap: 384px;
        grid-row-gap: 173px;
    }

    @media (max-width: 1600px) {
        background-size: 54%;
    }

    @media (max-width: 991px) {
        background-size: 72%;
        grid-row-gap: calc(450px - 10vw);
    }

    @media (max-width: 768px) {
        grid-column-gap: 10vw;
    }

    @media (max-width: 600px) {
        background-size: 95%;
    }

    @media (max-width: 450px) {
        background-size: 100%;
        grid-row-gap: 280px;
        grid-column-gap: 5vw;
        background-position: 50% 47%;
    }

    @media (max-width: 400px) {
        background-position: 50% 46%;
        background-size: 110%;
        grid-row-gap: 300px;
    }
`