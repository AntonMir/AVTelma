// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'
import privacyPolicyText from '@privacyPolicy/privacyPolicyText.js'


export default function PrivacyPolicy() {

    const text = config.appLang === 'RU' ? privacyPolicyText.RU : privacyPolicyText.EN

    return (
        <PrivacyPolicyStyled>
            <MainTitle>{text.title}</MainTitle>

            {/* 1 */}
            <Paragraph>
                <Title>{text['1'].title}</Title>
                <Digression>{text['1'].digression}</Digression>
                <Item>{text['1']['1']}</Item>
                <Item>{text['1']['2']}</Item>
            </Paragraph>

            {/* 2 */}
            <Paragraph>
                <Title>{text['2'].title}</Title>
                <Item>{text['2']['1']}</Item>
                <Item>{text['2']['2']}</Item>
                <Item>{text['2']['3']}</Item>
                <Item>{text['2']['4']}</Item>
                <Item>{text['2']['5']}</Item>
                <Item>{text['2']['6']}</Item>
                <Item>{text['2']['7']}</Item>
                <Item>{text['2']['8']}</Item>
                <Item>{text['2']['9']}</Item>
                <Item>{text['2']['10']}</Item>
                <Item>{text['2']['11']}</Item>
                <Item>{text['2']['12']}</Item>
                <Item>{text['2']['13']}</Item>
                <Item>{text['2']['14']}</Item>
            </Paragraph>

            {/* 3 */}
            <Paragraph>
                <Title>{text['3'].title}</Title>
                <Item>{text['3']['1']}</Item>
                <Item>{text['3']['2']}</Item>
            </Paragraph>

            {/* 4 */}
            <Paragraph>
                <Title>{text['4'].title}</Title>
                <Item>{text['4']['1']}</Item>
                <Item>{text['4']['2']}</Item>
                <Item>{text['4']['3']}</Item>
            </Paragraph>

            {/* 5 */}
            <Paragraph>
                <Title>{text['5'].title}</Title>
                <Item>{text['5']['1']}</Item>
                <Item>{text['5']['2']}</Item>
                <Item>{text['5']['3']}</Item>
                <Item>{text['5']['4']}</Item>
                <Item>{text['5']['5']}</Item>
                <Item>{text['5']['6']}</Item>
                <Item>{text['5']['7']}</Item>
                <Item>{text['5']['8']}</Item>
                <Item>{text['5']['8.1']}</Item>
                <Item>{text['5']['8.2']}</Item>
                <Item>{text['5']['8.3']}</Item>
                <Item>{text['5']['8.4']}</Item>
            </Paragraph>

            {/* 6 */}
            <Paragraph>
                <Title>{text['6'].title}</Title>
                <Item>{text['6']['1']}</Item>
                <Item>{text['6']['2']}</Item>
                <Item>{text['6']['3']}</Item>
                <Item>{text['6']['4']}</Item>
                <Item>{text['6']['5']}</Item>
                <Item>{text['6']['6']}</Item>
                <Item>{text['6']['7']}</Item>
            </Paragraph>

            {/* 7 */}
            <Paragraph>
                <Title>{text['7'].title}</Title>
                <Item>{text['7']['1']}</Item>
                <Item>{text['7']['2']}</Item>
                <Item>{text['7']['3']}</Item>
            </Paragraph>

            {/* 8 */}
            <Paragraph>
                <Title>{text['8'].title}</Title>
                <Item>{text['8']['1']}</Item>
                <Item>{text['8']['2']}</Item>
                <Item>{text['8']['3']}</Item>
                <Item>{text['8']['4']}</Item>
            </Paragraph>

            {/* 9 */}
            <Paragraph>
                <Title>{text['9'].title}</Title>
                <Digression>{text['1'].digression}</Digression>
                <Item>{text['9']['1']}</Item>
                <Item>{text['9']['2']}</Item>
                <Item>{text['9']['3']}</Item>
                <Item>{text['9']['4']}</Item>
                <Item>{text['9']['5']}</Item>
                <Item>{text['9']['6']}</Item>
                <Item>{text['9']['7']}</Item>
            </Paragraph>

            {/* 10 */}
            <Paragraph>
                <Title>{text['10'].title}</Title>
                <Digression>{text['10'].digression}</Digression>
                <Item>{text['10']['1']}</Item>
                <Item>{text['10']['2']}</Item>
                <Item>{text['10']['3']}</Item>
                <Item>{text['10']['4']}</Item>
                <Item>{text['10']['5']}</Item>
                <Item>{text['10']['6']}</Item>
                <Item>{text['10']['7']}</Item>
                <Item>{text['10']['8']}</Item>
                <Item>{text['10']['9']}</Item>
            </Paragraph>

            {/* 11 */}
            <Paragraph>
                <Title>{text['11'].title}</Title>
                <Item>{text['11']['1']}</Item>
                <Item>{text['11']['2']}</Item>
            </Paragraph>

            {/* 12 */}
            <Paragraph>
                <Title>{text['12'].title}</Title>
                <Item>{text['12']['1']}</Item>
                <Item>{text['12']['2']}</Item>
            </Paragraph>

            {/* 13 */}
            <Paragraph>
                <Title>{text['13'].title}</Title>
                <Digression>{text['13'].digression}</Digression>
            </Paragraph>

            {/* 14 */}
            <Paragraph>
                <Title>{text['14'].title}</Title>
                <Item>{text['14']['1']}</Item>
                <Item>{text['14']['2']}</Item>
                <Item>{text['14']['3']}</Item>
            </Paragraph>

        </PrivacyPolicyStyled>
    )
}

const PrivacyPolicyStyled = styled.div`
    padding: 0 10%;
    margin: 100px auto;

    @media screen and (max-width: 991px) {
        margin: 40px auto;
    }
`
const MainTitle = styled.h1`
    font-size: calc(1.4vw + 14px);
    font-weight: bold;
`

const Paragraph = styled.div``

const Title = styled.h1`
    font-size: calc(1vw + 10px);
`

const Digression = styled.p`
    font-size: calc(0.5vw + 5px);
`

const Item = styled.p`
    font-size: calc(0.5vw + 5px);
    margin-left: 3%;
`
