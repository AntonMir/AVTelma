const config = {
    appLang: 'RU', // EN RU AM
    appName: 'Avtelma',
    // serverUrl: 'http://192.168.1.4:1337',
    serverUrl: 'https://avtelmavds.space',
    // PostServerURL: 'http://localhost:7000',
    PostServerURL: 'https://avtelmavds.space:7443',
}

export default config


// =================================================================
// В зависимости от языка страницы изменяем название
// и описание в index.html
const appTitle = document.querySelector('.app-title')
const appIcon = document.querySelector('.app-icon')
const headDescription = document.querySelector('.head-description')

switch (config.appLang) {
    case 'RU':
        appTitle.innerHTML = "Автелма"
        headDescription.content = "Автелма"
        break
    case 'AM':
        appTitle.innerHTML = "Avtelam"
        headDescription.content = "Avtelam"
        appIcon.href = 'faviconAM.svg'
        break
    default:
        appTitle.innerHTML = "Avtelma"
        headDescription.content = "Avtelma"
        break
}
// =================================================================

