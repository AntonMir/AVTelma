// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function LanguageChanger() {

    return (
        <LangChangeWrapper>
            <CurrentLangWrapper>
                <LangLink
                    // href={config.appLang === 'RU' ? 'https://avtelma.com' : 'https://avtelma.ru'}
                    href='https://avtelma.com'
                // style={config.appLang === 'EN' ? { display: 'none' } : { display: '' }}
                >
                    {/* {config.appLang === 'RU' ? 'EN' : 'RU'} */}
                    EN
                </LangLink>
            </CurrentLangWrapper>
        </LangChangeWrapper >
    )
}

const LangChangeWrapper = styled.div`
    position: relative;
`
const CurrentLangWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;

    & + ul {
        opacity: 0;
        top: -100%;
        z-index: -1000;
    }
`
const LangLink = styled.a`
    padding: 5px 5px;
    margin: 0;
    color: #fff;
    user-select: none;
    white-space: nowrap;
    z-index: 999;
    font-weight: 300;
    font-size: calc(0.6vw + 6px);
    
    @media (min-width: 1920px) {
        font-size: 17px;
    }
    @media (max-width: 991px) {
        color: #000;
    }
`
