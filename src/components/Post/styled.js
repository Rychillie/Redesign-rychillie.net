import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  background: transparent;
  text-decoration: none;
  border-bottom: none;
  font-weight: 400;
  position: relative;
  border-bottom: 1px solid #202124;

  &:last-child {
    border-bottom: 0;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: calc(1.2rem + 100%);
    height: calc(1rem + 100%);
    background: transparent;
    border-radius: 0.3rem;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 800px) {
      width: calc(1.8rem + 100%);
      height: calc(1.4rem + 100%);
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    border-bottom: 0;
    margin: 0 0 2rem;
    flex-direction: row;
    align-items: center;
    padding: 0;

    &:hover {
      &:before {
        background: #202124;
      }
    }
  }
`

export const ListTags = styled.div`
  display: block;
  flex: 1;

  @media screen and (min-width: 800px) {
    text-align: right;
  }
`

export const Tag = styled.p`
  display: inline-flex;
  font-weight: 500;
  background: rgba(193, 193, 193, 0.06);
  color: #fff;
  margin: 0.2rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 3rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;

  &:hover {
    background: linear-gradient(transparent 0, #636e9a 0);
  }
`
