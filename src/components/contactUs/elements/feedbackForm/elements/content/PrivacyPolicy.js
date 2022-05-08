// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'


export default function PrivacyPolicy() {

    return (
        <Link to="/privacy-policy#top">
            {config.appLang === 'RU'
                ? `Политика конфиденциальности`
                : `Privacy policy`}
        </Link>
    )
}

const Link = styled(HashLink)`
    font-size: calc(0.5vw + 14px);
`