import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  margin-top: 2rem;
  margin-bottom: 3.5rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 4rem;
    align-items: center;
    flex-direction: row;
  }
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    margin-right: 2.5rem;
  }
`

export const MyLink = styled(Link)`
  color: #fff;
  background: transparent;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: #fff;
    background: linear-gradient(transparent 70%, rgba(193, 193, 193, 0.4) 0);
  }
`
