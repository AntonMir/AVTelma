import React from 'react'
// routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// components
import HomePage from '@components/homePage/HomePage.js'
import News from '@components/news/News.js'
import NewsSinglePage from '@components/news/NewsSinglePage.js'
import Products from '@components/products/Products.js'
import AboutUs from '@components/aboutUs/AboutUs.js'
import Contacts from '@components/contacts/Contacts.js'
import PrivacyPolicy from '@privacyPolicy/PrivacyPolicy.js'
import Header from '@components/header/Header.js'
import Footer from '@components/footer/Footer.js'
import Cookies from '@cookies/Cookies.js'
// style
import styled from 'styled-components'
import 'materialize-css'

export default function App() {

    return (
        <Router>
            <Header />
            <ContentStyled>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/news/:name" element={<NewsSinglePage />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </ContentStyled>
            <Footer />
            <Cookies />
        </Router>
    );
}

const ContentStyled = styled.div`
    min-height: 600px;
`

