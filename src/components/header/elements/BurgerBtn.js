import React, { useState } from 'react'
// redux
import { store } from '@store/store.js'
import { changeBurgerMenu } from '@store/actions.js'
// styled
import styled from 'styled-components'

// new style when btn has been actived
const BurgerBtnActive = {
    borderRadius: '14px',
}
const topActive = {
    transform: 'skewY(45deg)',
    top: 'calc(50% - 1px)',
    height: '3px',
    backgroundColor: '#000',
}
const middleActive = {
    opacity: 0,
    backgroundColor: '#000',
}
const bottomActive = {
    transform: 'skewY(-45deg)',
    top: 'calc(50% - 1px)',
    height: '3px',
    backgroundColor: '#000',
}

export default function BurgerBtn() {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

    const changeBurgerMenuHandler = (event) => {
        event.stopPropagation()
        store.dispatch(changeBurgerMenu(!burgerMenuIsOpen))
    }

    store.subscribe(() => {
        setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
    })

    return (
        <BurgerBtnStyled onClick={changeBurgerMenuHandler} style={burgerMenuIsOpen ? BurgerBtnActive : {}}>
            <Top style={burgerMenuIsOpen ? topActive : {}}></Top>
            <Middle style={burgerMenuIsOpen ? middleActive : {}}></Middle>
            <Bottom style={burgerMenuIsOpen ? bottomActive : {}}></Bottom>
        </BurgerBtnStyled>
    )
}

// base style
const BurgerBtnStyled = styled.div`
    display: none;
    position: relative;
    width: 35px;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 991px) {
        display: block;
    }

    > span {
        position: absolute;
        width: inherit;
        height: 2px;
        background-color: #fff;
        transition: all 0.3s ease;
    }
`

const Top = styled.span`
    top: 0;
`
const Middle = styled.span`
    top: calc(50% - 1px);
`
const Bottom = styled.span`
    top: calc(100% - 2px);
`
