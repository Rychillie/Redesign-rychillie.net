import styled from "styled-components"

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;

  @media screen and (min-width: 800px) {
    font-size: 1.8rem;
    line-height: 1.1;
  }
`

export const Text = styled.p`
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.2rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 1.5rem;
  }
`

export const PostTitle = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1.2rem;

  @media screen and (min-width: 800px) {
    margin-bottom: 0;
    flex: 3;
  }

  &.member {
    flex: 1;

    @media screen and (min-width: 800px) {
      flex: 1;
    }
  }
`

export const PostSmall = styled.small`
  color: #949495;
  font-size: 0.8rem;
  font-weight: 400;
`

export const MemberDate = styled.p`
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;
`

export const MemberDetails = styled.p`
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;

  @media screen and (min-width: 800px) {
    flex: 3;
  }
`
