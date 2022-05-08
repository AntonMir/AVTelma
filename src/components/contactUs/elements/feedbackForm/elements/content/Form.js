import { useState, useEffect, useCallback } from 'react'
// components
import PrivacyPolicy from '@contactUs/elements/feedbackForm/elements/content/PrivacyPolicy.js'
// castom hook
import { useHttp } from '@hooks/http.hook.js'
import { useMessage } from '@hooks/message.hook.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'


export default function Form() {

    // кастомный хук для вывоа ошибки
    const message = useMessage()

    // кастомный хук для отправки данных
    const { error, request, clearError } = useHttp()

    // how many seconds need wait
    const waitingInterval = 3

    // state для name, email и question
    // prohibition - запрет
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        question: '',
        lang: config.appLang,
        appName: config.appName
    })
    const [prohibitionSending, setProhibitionSending] = useState(false)
    const [counter, setCounter] = useState(waitingInterval)

    // обработаем ошибку
    useCallback(() => {
        message(config.appLang === 'EN' ? error?.EN : error?.RU)
        clearError()
    }, [error, clearError, message])

    // заводим счетчик
    useEffect(() => {
        let timer
        if (prohibitionSending && counter >= 0) {
            timer = setTimeout(() => setCounter((counter) => counter - 1), 1000)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [prohibitionSending, counter])

    // сохраняем в наш state name, email и question
    const changeUserData = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // возвращаем доступ к отправке данных и откатываем счетчик обратно до "10"
    const accessSending = () => {
        setProhibitionSending(false)
        setCounter(waitingInterval)
    }

    // вызывает хук useHttp, отправляет запрос на сервер,
    // получает ответ в виде промиса и выводит его на экран
    const sendQuestion = async () => {
        try {
            const data = await request({ url: `${config.PostServerURL}`, method: 'POST', body: { ...form } })
            // очищаем форму
            setForm({
                name: '',
                email: '',
                phone: '',
                company: '',
                question: '',
                lang: config.appLang,
                appName: config.appName
            })
            // выводим ответ от сервера
            message(config.appLang === 'RU' ? data?.message?.RU : data?.message?.EN)
            // после отправки запрещаем на время повторную отправку
            setProhibitionSending(true)
            setTimeout(() => {
                accessSending()
            }, waitingInterval * 1000)
        } catch (error) {

        }
    }

    return (
        <FormComponent>
            <Input
                placeholder={config.appLang === 'RU' ? 'Имя' : 'Name'}
                id="feedback-name"
                type="text"
                name="name"
                value={form.name}
                onChange={changeUserData}
            />
            <Input
                placeholder={config.appLang === 'RU' ? 'Почтовый ящик' : 'Email'}
                id="feedback-email"
                type="text"
                name="email"
                value={form.email}
                onChange={changeUserData}
            />
            <Input
                placeholder={config.appLang === 'RU' ? 'Номер телефона' : 'Phone number'}
                id="feedback-phone"
                type="text"
                name="phone"
                value={form.phone}
                onChange={changeUserData}
            />
            <Input
                placeholder={config.appLang === 'RU' ? 'Название компании' : 'Company name'}
                id="feedback-company"
                type="text"
                name="company"
                value={form.company}
                onChange={changeUserData}
            />
            <Question
                placeholder={config.appLang === 'RU' ? 'Ваш вопрос' : 'Question'}
                id="feedback-question"
                type="text"
                name="question"
                autoComplete="off"
                value={form.question}
                onChange={changeUserData}
            />
            <Button onClick={sendQuestion} disabled={prohibitionSending}>
                {config.appLang === 'RU' ? 'Отправить' : 'Send'}
            </Button>
            <Timer style={{ opacity: `${prohibitionSending ? '1' : '0'}` }}>
                {config.appLang === 'RU'
                    ? `Повторная отправка будет доступна через ${counter} секунд`
                    : `Resubmitting will be available in ${counter} seconds`}
            </Timer>

            <PrivacyPolicy />

        </FormComponent>
    )
}

const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    // margin: 50px auto 0;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const Input = styled.input`
    margin-bottom: 20px !important;
    background-color: #fff !important;
    color: #000;
    max-width: 90%;
    padding: 0 20px !important;
    opacity: 0.8;
    border: 1px solid #0095B6 !important;
    transition: all 0.3s ease;
    &:focus {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
    }
    @media (max-width: 991px) {
        max-width: 84%;
    }
    @media (max-width: 450px) {
        max-width: calc(100% - 41px);
    }
`

const Question = styled.textarea`
    background-color: #fff !important;
    padding: 20px;
    color: #000;
    height: 200px;
    max-height: 1000px;
    max-width: calc(90.5% + 40px);
    min-width: 30%;
    opacity: 0.8;
    border: 1px solid #0095B6 !important;
    &:focus-visible {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
        outline: none !important;
    }
    &::-webkit-input-placeholder {
        font-size: 17px;
    }
    &::-moz-placeholder {
        font-size: 17px;
    }
    &:-ms-input-placeholder {
        font-size: 17px;
    }
    &:-moz-placeholder {
        font-size: 17px;
    }
    @media (max-width: 991px) {
        max-width: calc(84% + 40px);
    }
    @media (max-width: 450px) {
        max-width: calc(100%);
    }
`

const Button = styled.button`
    padding: 15px 45px 17px;
    margin: 25px 0 0 0;
    font-size: 20px;
    color: #fff;
    background-color: #13A9D1;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    border: none;
    &:focus {
        background-color: #13A9D1;
    }
    &:active {
        box-shadow: 0 0 1px #000;
        background-color: #13A9D1;
    }
    &:disabled {
        opacity: 0.5;
        background-color: gray;
    }
    @media (max-width: 991px) {
        margin: 25px 0 0 0;
        font-size: 15px;
    }
    @media (max-width: 350px) {
        padding: 12px 35px 13px;
        font-size: 13px;
    }
`

const Timer = styled.p`
    margin: 20px 0 10px;
    font-size: calc(0.3vw + 10px);
`