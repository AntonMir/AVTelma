const config = {
    appLang: 'AM', // EN RU AM
    logoLang: 'AM', // REG(regular) AM(Armenia)
    appName: 'Avtelma',
    serverUrl: 'http://192.168.1.4:1337',
    // serverUrl: 'https://avtelmavds.space',
    // PostServerURL: 'http://localhost:7000',
    PostServerURL: 'https://avtelmavds.space:7443',
}

export default config




// switch(config.appLang){
//     case 'RU':
//         contact = {
//             img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
//             value: props.contact.attributes.Value_RU,
//         }
//         break
//     case 'AM':
//         contact = {
//             img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
//             value: props.contact.attributes.Value_AM,
//         }
//         break
//     default:
//         contact = {
//             img: config.serverUrl + props.contact.attributes.Img.data.attributes.url,
//             value: props.contact.attributes.Value_EN,
//         }
//         break
// }



// let title = ''
// let text = ''

// switch(config.appLang){
// case 'RU':
//     text = `В Avtelma мы разрабатываем современные решения для различных сфер жизни: 
//             от интеллектуального трафика по всему городу до улучшений персонального умного дома.`
//     title = `Сферы деятельности компании`
//     break
// case 'AM':
//     text = `In Avtelam, we develop modern solutions for various life spheres. 
//             From city-wide smart traffic to personal SmartHome improvements.`
//     title = `Areas of activity of the company`
//     break
// default:
//     text = `In Avtelma, we develop modern solutions for various life spheres. 
//             From city-wide smart traffic to personal SmartHome improvements.`
//     title = `Areas of activity of the company`
//     break
// }