import styled from "styled-components"

export const LayoutMain = styled.div`
    flex-direction: column;
    display: flex;
    max-width: 1150px;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media screen and (min-width: 800px) {
        padding: 0 2rem;
    }
`
