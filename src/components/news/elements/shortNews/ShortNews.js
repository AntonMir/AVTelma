// components
import Illustration from '@news/elements/shortNews/Illustration.js'
import Text from '@news/elements/shortNews/Text.js'
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
            btn: 'Показать полностью'
        }
        : {
            title: props.post.attributes.Title_EN,
            description: props.post.attributes.Description_EN,
            img: config.serverUrl + props.post.attributes.Img_EN.data.attributes.url,
            UID: props.post.attributes.UID,
            btn: 'Read more'
        }

    return (
        <ShortNewsWrapper>

            {/* <ShortNewsLink to={`${post.UID}`} onClick={changeNewsPostUIDHandler}> */}
            <ShortNewsStyled>
                <Illustration img={post.img} />
                <Text title={post.title} text={post.description} uid={post.UID} btn={post.btn} />
            </ShortNewsStyled>
            {/* </ShortNewsLink> */}

        </ShortNewsWrapper>
    );
}

const ShortNewsWrapper = styled.div`
    // position: relative;
    // padding: 4%;
    margin: 50px 0;

    @media (max-width: 991px) {
        // margin-bottom: 50px; 
        // padding: 8% 4%;
    }
`

// const ShortNewsLink = styled(HashLink)`
//     margin: 30px 0;
// `

const ShortNewsStyled = styled.div`
    // position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

// const NewsImg = styled.div`
//     position: absolute;
//     left: 0;
//     top: 0;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     background-image: ${(props) => `url(${props.img})`};
// `