import React from "react"
import { Gatsby } from "@styled-icons/remix-fill/Gatsby"
import { Netlify } from "@styled-icons/simple-icons/Netlify"

import links from "./content"
import * as S from "./styled"

const Footer = () => (
    <S.MyFooter>
        <S.MenuFooterList>
            {links.map((link, i) => (
                <S.MenuFooterItem key={i}>
                    <S.MenuFooterLink
                        to={link.url}
                    >
                        {link.label}
                    </S.MenuFooterLink>
                </S.MenuFooterItem>
            ))}
        </S.MenuFooterList>
        <S.Copy>© 2020 - Rychillie, developed with s<S.CopyLink href="https://www.gatsbyjs.org/"><S.Icon className={"gatsby"}><Gatsby /></S.Icon>GatsbyJS</S.CopyLink> and <S.CopyLink href="https://www.netlify.com/"><S.Icon className={"netlify"}><Netlify /></S.Icon>Netlify</S.CopyLink></S.Copy>
    </S.MyFooter>
)

export default Footer
