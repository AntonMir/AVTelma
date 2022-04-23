// img
import spinner from '@img/global/spinner.svg'
import smartInshurance from '@img/homePage/products/smartInshurance.webp'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function Illustration(props) {

    const { img } = props;

    return (
        <IllustrationStylde>
            <Img src={img} alt="img" />
        </IllustrationStylde>
    );
}

const IllustrationStylde = styled.div`
    max-width: 48%;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
`
