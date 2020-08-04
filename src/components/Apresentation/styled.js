import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
    margin-bottom: 2rem;
    margin-top: 2rem;

    @media screen and (min-width: 800px) {
        align-items: center;
        flex-direction: row;
    }
`

export const Side = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 2rem;
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
    margin-bottom: 2.5rem;
`

export const MyLink = styled(Link)`
    color: #fff;
    background: transparent;
    text-decoration: none;
    font-weight: 700;

    &:hover {
        color: #e1e1e1;
        background: linear-gradient(transparent 70%,#636e9a 0);
    }
`
