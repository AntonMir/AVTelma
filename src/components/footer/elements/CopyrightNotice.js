// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function CopyrightNotice() {
    return (
        <CopyrightNoticeComponent>
            <p>
                {config.appLang === 'EN'
                    ? '© 2021 Avtelma. All rights reserved.'
                    : '© 2021 Avtelma. Все права защищены.'}
            </p>
        </CopyrightNoticeComponent>
    )
}

const CopyrightNoticeComponent = styled.div`
    position: absolute;
    bottom: 6%;
    color: white;
    font-weight: 300;
    width: 100%;

    > p {
        text-align: center;
    }

    @media (max-width: 991px) {
        bottom: 12%;
    }

    
    @media (max-width: 360px) {
        bottom: 4%;
    }
`
