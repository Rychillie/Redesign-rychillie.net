import React from "react"

import links from "./content"
import * as S from "./styled"

const Navbar = ({ children }) => {
    return (
        <S.Navbar>
            <S.MyLink to="/">
                <S.Title>
                    <span className="emoji" role="img" aria-label="unicorn">🦄</span>
                    Rychillie
                </S.Title>
            </S.MyLink>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink
                            to={link.url}
                            activeClassName="active"
                        >
                            {link.label}
                        </S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.Navbar>
    )
}

export default Navbar
