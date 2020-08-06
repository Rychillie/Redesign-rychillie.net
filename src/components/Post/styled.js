import styled from "styled-components"

export const Card = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: transparent;
    text-decoration: none;
    border-radius: .3rem;
    padding: .6rem 1rem;
    margin: 0 0 1.2rem;
    border-bottom: none;
    font-weight: 400;
    background: hsla(225, 6%, 13%, .4);

    &:hover {
        background: #202124;
        cursor: pointer;
    }

    @media screen and (min-width: 800px) {
        padding: 1rem 1.5rem;
        flex-direction: row;
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
    background: #f1f3f5;
    color: #343a40;
    margin: .2rem;
    padding: .4rem .6rem;
    font-size: .8rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    line-height: 1;

    &.javascript {
        background: #c4c836;
    }

    &.reactjs, &.react-native {
        background: #61dafb;
    }
`
