import styled from "styled-components"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  display: block;
  border-radius: 16px;
  margin-bottom: 1rem;
  min-height: 200px;
  min-width: 200px;

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
    min-height: 360px;
    min-width: 360px;
  }
`
