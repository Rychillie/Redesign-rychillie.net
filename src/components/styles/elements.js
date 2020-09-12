import styled from "styled-components"

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
