import { CHANGE_LANGUAGE } from '@store/actions.js'
import { CHANGE_HEADER_BURGER_MENU } from '@store/actions.js'

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                pageLanguage: action.status,
            }
        case CHANGE_HEADER_BURGER_MENU:
            return {
                ...state,
                burgerMenuIsOpen: action.status,
            }

        default:
            return state
    }
}
