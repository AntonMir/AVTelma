function sleep(milliseconds) {
    console.log('---', `wait ${milliseconds} sec`);
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


export function repeater(func, timeout) {
    return function (repeatCount) {
        try {
            func()
        } catch {
            for (let count = 0; count < repeatCount; count++) {
                func()
                sleep(timeout * 1000)
            }
        }
    }
}


// import { repeater } from '@services/utils.js'


// const decoratedRepeater = repeater(request, 2);
// decoratedRepeater(10)