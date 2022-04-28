// components
import Illustration from '@news/newsSinglePage/elements/otherNews/elements/shortNews/Illustration.js'
import Text from '@news/newsSinglePage/elements/otherNews/elements/shortNews/Text.js'
// config
import config from '@config/config.js'
// style
import styled from 'styled-components'


export default function ShortNews(props) {

    // Подставляем Title, description и Img в соответствии с установленным языком приложения
    const post = config.appLang === 'RU'
        ? {
            title: props.post.attributes.Title_RU,
            description: props.post.attributes.Description_RU,
            img: config.serverUrl + props.post.attributes.Img_RU.data.attributes.url,
            UID: props.post.attributes.UID,
            tag: props.post.attributes.Tag,
            createdAt: props.post.attributes.createdAt,
            updatedAt: props.post.attributes.updatedAt,
            publishedAt: props.post.attributes.publishedAt,
            btn: 'Показать полностью'
        }
        : {
            title: props.post.attributes.Title_EN,
            description: props.post.attributes.Description_EN,
            img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
            UID: props.post.attributes.UID,
            tag: props.post.attributes.Tag,
            createdAt: props.post.attributes.createdAt,
            updatedAt: props.post.attributes.updatedAt,
            publishedAt: props.post.attributes.publishedAt,
            btn: 'Read more'
        }

    return (
        <ShortNewsWrapper>
            <Illustration img={post.img} UID={post.UID} />
            <Text post={post} />
        </ShortNewsWrapper>
    );
}

const ShortNewsWrapper = styled.div`
    margin: 0 0 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

