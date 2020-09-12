import styled from "styled-components"
import { Link } from "gatsby"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 3.5rem;
  }
`

export const Left = styled.div``

export const Right = styled.div``

export const ListPosts = styled.div`
  display: flex;
  flex-direction: column;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  form {
    margin-top: 1.6rem;
    margin-left: 0;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    form {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.spaceBetween {
    justify-content: space-between;
  }

  &.marginBottom {
    margin-bottom: 2rem;
  }
`

export const ViewLink = styled(Link)`
  display: flex;
  font-weight: 500;
  background: rgba(193, 193, 193, 0.06);
  color: #fff;
  margin: 0.2rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.8rem;
  border-radius: 3rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background: #202124;
  }
`
