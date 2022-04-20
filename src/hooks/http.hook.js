import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [status, setStatus] = useState('initial')
    const [error, setError] = useState(null)

    // Запрос данных с сервера
    async function customFetch({ url, method = 'GET', body = null, headers = {} }) {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Что-то пошло не так')
        }

        return data
    }

    const request = useCallback(async (params) => {
        // EXAMPLE GET: params = {url: `${config.serverUrl}/api/news?populate=*`}
        // EXAMPLE POST: params = {url: `${config.serverUrl}/api/news?populate=*`, method: method, body: body, ...}

        setStatus('loading');

        try {
            // если в параметрах прилетел массив а не объект:
            if (Array.isArray(params)) {
                // Array.isArray() - проверка на массив НЕ НА ОБЪЕКТ
                // Promise.all - возвращает массивом все запросы к серверу

                const results = await Promise.all(params.map(param => customFetch(param)));

                setStatus('loaded');

                return results
            }

            // иначе воспронимаем params как объект
            const result = await customFetch(params);

            setStatus('loaded');

            return result
        } catch (error) {
            setStatus('error')
            setError(error.message)
            throw error
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {
        status,
        request,
        error,
        clearError,
        isLoading: status === 'loading',
        isLoaded: status === 'loaded',
        isError: status === 'error'
    }

}


//--------------------------------------------------------------------------------------------

// import { useState, useCallback } from 'react'

// export const useHttp = () => {
//     const [status, setStatus] = useState('initial')
//     const [error, setError] = useState(null)

//     const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
//         setStatus('loading')
//         try {

//             if (body) {
//                 body = JSON.stringify(body)
//                 headers['Content-Type'] = 'application/json'
//             }

//             const response = await fetch(url, { method, body, headers })
//             const data = await response.json()

//             if (!response.ok) {
//                 throw new Error(data.message || 'Что-то пошло не так')
//             }

//             setStatus('loaded')

//             return data
//         } catch (error) {
//             setStatus('error')
//             setError(error.message)
//             throw error
//         }
//     }, [])

//     const clearError = useCallback(() => setError(null), [])

//     return {
//         status,
//         request,
//         error,
//         clearError,
//         isLoading: status === 'loading',
//         isLoaded: status === 'loaded',
//         isError: status === 'error'
//     }

// }

//--------------------------------------------------------------------------------------------
