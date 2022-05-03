// кладем в переменную тип нашего action
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const CHANGE_HEADER_BURGER_MENU = 'CHANGE_HEADER_BURGER_MENU'
export const CHANGE_CURRENT_OPEN_NEWS = 'CHANGE_CURRENT_OPEN_NEWS'

// меняем язык приложения
export function changeLanguage(status) {
    return {
        type: CHANGE_LANGUAGE,
        status: status,
    }
}

// Открываем/закрываем меню навигации на маленьком экране в header
export function changeBurgerMenu(status) {
    return {
        type: CHANGE_HEADER_BURGER_MENU,
        status: status,
    }
}

// Открываем/закрываем меню навигации на маленьком экране в header
export function changeCurrentNews(status) {
    return {
        type: CHANGE_CURRENT_OPEN_NEWS,
        status: status,
    }
}

