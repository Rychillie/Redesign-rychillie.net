import React from "react"

import Avatar from "../Avatar"

import * as S from "./styled"

const Apresentation = () => {
    return (
        <S.Wrapper>
            <S.Side>
                <S.Title>Hey, my name is Rychillie Umpierre de Oliveira and I'm a Brazilian FrontEnd Developer and Content Creator.</S.Title>
                <S.Text>A young Frontend developer who wants to share his knowledge. Always looking to evolve and improve in all aspects. You can see <S.MyLink to="/portfolio/" title="Portfolio">my work</S.MyLink> or learn more <S.MyLink to="/about/" title="About">about me</S.MyLink>.</S.Text>
            </S.Side>
            <Avatar />
        </S.Wrapper>
    )
}

export default Apresentation
