import React from "react"

import * as S from "./styled"
import * as T from "../../styles/typography"

const Members = () => {
  return (
    <S.Card>
      <T.PostTitle className={"member"}>Jack Bowln</T.PostTitle>
      <T.MemberDetails>Se inscreveu com Prime</T.MemberDetails>
      <T.MemberDate>06 de maio de 2020</T.MemberDate>
    </S.Card>
  )
}

export default Members
