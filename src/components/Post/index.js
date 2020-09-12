import React from "react"

import * as S from "./styled"
import * as T from "../styles/typography"

const Post = () => {
  return (
    <S.Card>
      <T.PostTitle>
        <T.PostSmall>06 de maio de 2020</T.PostSmall>
        PicPay Clone - React-Native & Styled Components
      </T.PostTitle>
      <S.ListTags>
        <S.Tag>Javascript</S.Tag>
        <S.Tag>ReactJS</S.Tag>
        <S.Tag>React-Native</S.Tag>
      </S.ListTags>
    </S.Card>
  )
}

export default Post
