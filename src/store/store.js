import { createStore } from 'redux'
import { reducer } from './reducer'
// config
import config from '@config/config.js'

// Начальное состояние
export const initialState = {
    pageLanguage: localStorage.getItem('currentLang') || config.defaultLang,
    burgerMenuIsOpen: false,
    currentOpenNews: localStorage.getItem('newsPageUID') || ''
}

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
