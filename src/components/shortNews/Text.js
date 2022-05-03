// link
import { HashLink } from 'react-router-hash-link'
// store
import { store } from '@store/store.js'
import { changeCurrentNews } from '@store/actions.js'
// img 
import arrow from '@img/homePage/products/arrow.svg'
// style
import styled from 'styled-components'


export default function Text(props) {

    const { title, description, UID, tag, publishedAt, btn } = props.post

    const changeNewsPostUIDHandler = () => {
        localStorage.setItem('newsPageUID', UID)
        store.dispatch(changeCurrentNews(UID))
    }

    function parseDate(dateFromDB) {
        const parsedDate = new Date(dateFromDB)
        const day = parsedDate.getDate() < 10 ? '0' + parsedDate.getDate() : parsedDate.getDate()
        const month = parsedDate.getMonth() + 1 < 10 ? '0' + (parsedDate.getMonth() + 1) : parsedDate.getMonth() + 1
        const year = parsedDate.getFullYear()
        let result = day + '.' + month + '.' + year
        return result
    }

    let parsedDate = parseDate(publishedAt)

    return (
        <TextStylde>
            <Head>
                <p>{parsedDate}</p>
                <p>{tag}</p>
            </Head>
            <Title
                onClick={changeNewsPostUIDHandler}
                to={'/news/' + UID + '#top'}
            >
                {title}
            </Title>
            <Description>{description}</Description>
            <Link
                onClick={changeNewsPostUIDHandler}
                to={'/news/' + UID + '#top'}
            >
                <p>{btn}</p>
                <img src={arrow} alt="img" />
            </Link>
        </TextStylde>
    );
}


const TextStylde = styled.div`
    max-width: 60%;

    @media (max-width: 991px) {
        max-width: 50%;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        margin-top: 20px;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: calc(13% + 100px);
    color: #0095B6;
    margin-bottom: 10px;

    font-size: calc(0.6vw + 6px);
    font-weight: 300;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
    }
    @media (max-width: 768px) {
        font-size: calc(0.8vw + 8px);
    }
   
    > p {
        margin: 0;
        cursor: default;
    }
`

const Title = styled(HashLink)`
    font-size: calc(1.5vw + 15px);
    font-weight: 700;
    color: #0095B6;
    margin: calc(1vw + 5px) 0 0 0;
    border: none;

    @media screen and (min-width: 1920px) {
        font-size: 44px;
    }

    @media (max-width: 991px) {
        margin-top: calc(1vw + 10px);
    }

    @media (max-width: 600px) {
        font-size: calc(1.6vw + 16px);
    }
`

const Description = styled.p`
    font-size: calc(0.8vw + 8px);
    margin: calc(0.5vw + 5px) 0 calc(1vw + 5px) 0;
    font-weight: 300;

    @media screen and (min-width: 1920px) {
        font-size: 24px;
    }

    @media (max-width: 991px) {
        margin-bottom: calc(1vw + 10px);
    }
    @media (max-width: 600px) {
        font-size: calc(1.1vw + 11px);
    }
`
const Link = styled(HashLink)`
    display: flex;
    align-items: center;
    font-size: calc(0.4vw + 13px);
    color: #000;
    opacity: 0.4;

    > p {
        border-bottom: 1px solid rgba(0, 0, 0, 0);
        margin: 0;
        cursor: pointer;
        font-weight: 300;

        :hover {
            border-bottom: 1px solid #000;
        }
    }

    > img {
        width: auto;
        height: 25%;
        margin: 0 0 0 0.4vw;
    }

    @media (min-width: 1920px) {
        font-size: 20px;
    } 
`
