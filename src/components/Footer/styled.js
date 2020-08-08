import styled from "styled-components"
import { Link } from "gatsby"

export const MyFooter = styled.footer`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
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
`

export const Copy = styled.p`
    color: #949495;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 1.2rem 0;
    text-align: center;

    @media screen and (min-width: 800px) {
        margin: 1.5rem 0;
    }
`

export const CopyLink = styled.a`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
    text-decoration: none;
    background: transparent;
    text-decoration: none;
    display: inline-block;
    font-weight: 700;

    @media screen and (min-width: 800px) {
        margin: 0;
    }
`

export const Icon = styled.div`
    display: inline-block;

    svg {
        fill: #fff;
        width: 21px;
        height: 21px;
        display: inline-block;
        vertical-align: sub;
        margin-right: .1rem;
    }

    &.gatsby {
        svg {
            fill: #b17acc;
        }
    }

    &.netlify {
        svg {
            fill: #15847d;
        }
    }
`

export const MenuFooterList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuFooterItem = styled.li`
    padding: 0.5rem 0;

    @media screen and (min-width: 800px) {
        margin-right: 0;
    }
`

export const MenuFooterLink = styled(Link)`
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
