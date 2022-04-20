import React from 'react'
// routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// components
import HomePage from '@components/homePage/HomePage.js'
import NewsListPage from '@components/news/NewsListPage.js'
import NewsPage from '@components/news/elements/NewsPage.js'
import ProductsListPage from '@components/products/ProductsListPage.js'
import AboutUs from '@components/aboutUs/AboutUs.js'
import Contacts from '@components/contacts/Contacts.js'
import Header from '@components/header/Header.js'
import Footer from '@components/footer/Footer.js'
// style
import styled from 'styled-components'
import 'materialize-css'

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <ContentStyled>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/news" element={<NewsListPage />} />
                    <Route exact path="/news/:name" element={<NewsPage />} />
                    <Route exact path="/products" element={<ProductsListPage />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </ContentStyled>
            <Footer />
        </BrowserRouter>
    );
}

const ContentStyled = styled.div`
    min-height: 600px;
`

