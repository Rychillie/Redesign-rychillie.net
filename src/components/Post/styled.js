import styled from "styled-components"

export const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: transparent;
    text-decoration: none;
    margin: 0 0 2rem;
    border-bottom: none;
    font-weight: 400;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: calc(1.2rem + 100%);
        height: calc(1rem + 100%);
        background: transparent;
        border-radius: .3rem;
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

        &:before {
            background: #202124;
        }
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
        align-items: center;
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
