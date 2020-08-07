import styled from "styled-components"

export const ListSocial = styled.div`
    width: 100%;
`

export const ItemSocial = styled.a`
    padding-left: 1rem;
    padding-right: 1rem;
    letter-spacing: .05em;
    padding-top: .75rem;
    padding-bottom: .75rem;
    margin: .5rem .35rem;
    font-weight: 500;
    justify-content: flex;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    border-radius: .5rem;
    background: rgba(0,119,181,.1);
    -webkit-text-fill-color: #0077b5;
    text-decoration: none;
    color: #0077b5;
    opacity: 1;
    transition: all 300ms ease-in-out;

    &:hover {
        transform: scale(1.02);
        opacity: .8;
    }

    svg {
        fill: rgb(0, 119, 181);
        width: 21px;
        height: 21px;
        vertical-align: middle;
        margin-right: .5rem;
    }

    &.instagram {
        background: rgba(193, 193, 193, 0.1);
        -webkit-text-fill-color: #FFF;
        color: #FFF;

        svg {
            fill: #FFF;
        }
    }

    &.twitter {
        background: rgba(0,119,181,.1);
        -webkit-text-fill-color: #0077b5;
        color: #0077b5;

        svg {
            fill: rgb(0, 119, 181);
            width: 21px;
        }
    }

    &.linkedin {
        background: rgba(0,119,181,.1);
        -webkit-text-fill-color: #0077b5;
        color: #0077b5;

        svg {
            fill: rgb(0, 119, 181);
        }
    }

    &.github {
        background: rgba(193, 193, 193, 0.1);
        -webkit-text-fill-color: #FFF;
        color: #FFF;

        svg {
            fill: #FFF;
        }
    }

    &.twitch {
        background: rgba(100, 65, 164, 0.1);
        -webkit-text-fill-color: #6441a5;
        color: #6441a5;

        svg {
            fill: #6441a5;
        }
    }

    &.youtube {
        background: rgba(255,65,66,.1);
        -webkit-text-fill-color: #FF4142;
        color: #FF4142;

        svg {
            fill: #FF4142;
        }
    }

    &.telegram {
        background: rgba(0,119,181,.1);
        -webkit-text-fill-color: #0077b5;
        color: #0077b5;

        svg {
            fill: rgb(0, 119, 181);
            width: 21px;
        }
    }
`
