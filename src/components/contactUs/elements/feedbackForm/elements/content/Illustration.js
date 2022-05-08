import { useState } from 'react'
// img
import formIllustration from '@img/contacts/formIllustration.svg'
// style
import styled from 'styled-components'


export default function Illustration() {


    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <IllustrationWrapper>
            <Img
                onLoad={() => setIsLoaded(false)}
                src={formIllustration}
                alt="img"
                isLoaded={isLoaded}
            />
        </IllustrationWrapper >
    );
}

const IllustrationWrapper = styled.div`
    height: 100%;
    width: 90%;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const Img = styled.img`
    width: 90%;
    height: auto;
`