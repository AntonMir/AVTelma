// img
import logoGif from '@img/footer/logoGif.gif'
import logoGif_AM from '@img/footer/logoGif_AM.gif'
// styled
import styled from 'styled-components'
import config from '@config/config'

export default function Gif() {
    return (
        <GifComponent>
            <Img src={config.appLang === 'AM' ? logoGif_AM : logoGif} alt='img' />
        </GifComponent>
    )
}

const GifComponent = styled.div`
    display: flex;
    margin: 3% 0 1%;
    width: 100%;
`

const Img = styled.img`
    margin: 0 auto;
    height: auto;
    width: calc(10% + 100px);
`
