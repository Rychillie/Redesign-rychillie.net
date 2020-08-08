import React from "react"

import Avatar from "../Avatar"

import * as S from "./styled"
import * as T from "../styles/typography"

const Apresentation = () => {
    return (
        <S.Wrapper>
            <S.Side>
                <T.Title style={{marginBottom: "1rem"}}>Hey, my name is Rychillie Umpierre de Oliveira and I'm a Brazilian FrontEnd Developer and Content Creator.</T.Title>
                <T.Text>A young Frontend developer who wants to share his knowledge. Always looking to evolve and improve in all aspects. You can see <S.MyLink to="/" title="Portfolio">my work</S.MyLink> or learn more <S.MyLink to="/" title="About">about me</S.MyLink>.</T.Text>
            </S.Side>
            <Avatar />
        </S.Wrapper>
    )
}

export default Apresentation
