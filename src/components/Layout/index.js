import React from "react"

import * as S from "./styled"
import GlobalStyles from "../styles/global"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <S.LayoutMain>
                <Navbar />
                {children}
                <Footer />
            </S.LayoutMain>
        </>
    )
}

export default Layout
