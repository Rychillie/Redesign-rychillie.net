import styled from "styled-components"
import { Link } from "gatsby"

export const Navbar = styled.nav`
    line-height: 2rem;
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;
    background: #161616;
    position: static;
    width: 100%;
    z-index: 2;
    left: 0;
    top: 0;

    @media screen and (min-width: 800px) {
        margin: 1.6rem 0;
        padding: 1.2rem 0;
    }

    span.emoji {
        display: inline-block!important;
        margin: 0 .25rem 0 .1rem;

        @media screen and (min-width: 800px) {
            margin: 0 .5rem 0 .1rem;
        }
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    background: transparent;

    @media screen and (min-width: 800px) {
        font-size: 1.6rem;
    }
`

export const MyLink = styled(Link)`
    background: transparent;
    border-radius: .3rem;
    padding: .6rem;
    margin: 0 .25rem;
    color: rgba(0,0,0,.7);
    border-bottom: none;
    font-weight: 400;
    font-size: .95rem;
    margin-left: -1rem;
    text-decoration: none;

    @media screen and (min-width: 800px) {
        font-size: 1.3rem;
        margin-right: 3rem;
    }
`

export const MenuLinksList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        background: #202124;
    }

    &:last-of-type {
        margin-right: -.6rem;

        @media screen and (min-width: 800px) {
            margin-right: 0;
        }
    }
`

export const MenuLinksLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    border-radius: .3rem;
    padding: .6rem;
    margin: 0 .25rem;
    color: rgba(0,0,0,.7);
    border-bottom: none;
    font-weight: 400;
    font-size: .95rem;
    color: #fff;

    &:hover {
        background: #202124;
    }

    @media screen and (min-width: 800px) {
        padding: 1rem 1.5rem;
        margin: 0 .25rem;
        font-size: 1.1rem;
    }
`
