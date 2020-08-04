import React from "react"

import * as S from "./styled"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <S.LayoutMain>{children}</S.LayoutMain>
        </>
    )
}

export default Layout
