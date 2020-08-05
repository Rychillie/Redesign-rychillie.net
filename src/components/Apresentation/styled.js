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
