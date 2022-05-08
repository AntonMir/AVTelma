//components
import Head from '@aboutus/elements/Head.js'
import Introduction from '@aboutus/elements/introduction/Introduction.js'
import ActivityAreas from '@aboutus/elements/activityAreas/ActivityAreas.js'
import Slogan from '@aboutus/elements/Slogan.js'
import OurVision from '@aboutus/elements/ourVision/OurVision.js'
import Conclusion from '@aboutus/elements/conclusion/Conclusion.js'
//styled
import styled from 'styled-components'

export default function AboutUs() {

    return (
        <AboutUsComponent>
            <Head />
            <Content>
                <Introduction />
                <ActivityAreas />
            </Content>
            <Slogan />
            <Content>
                <OurVision />
                <Conclusion />
            </Content>
        </AboutUsComponent>
    )
}

const AboutUsComponent = styled.div`
   position: relative;
   margin-top: -80px;
`

const Content = styled.div`
   margin: 0 auto;
   max-width: 1440px;

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
        padding: 0 7%;
    }
`