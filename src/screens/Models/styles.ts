import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.background};
`
export const Content = styled.div`
    width: 100%;
    overflow-y: auto;
    margin-top: 72px;
    margin-left: 300px;
    padding: 1.5rem;
`
export const Brands = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a, button {
        min-width: 220px;
        max-width: 20%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem;
        border: .5px solid #d3d3d3;
        border-radius: 8px;
        background:  ${({ theme }) => theme.colors.white};
        font-size: .875rem;
        transition: .3s;
        text-transform: uppercase;

        :hover {
            color: ${({ theme }) => theme.colors.primary};
            border: .5px solid ${({ theme }) => theme.colors.primary};
            svg {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }
`
export const Breadcrumbing = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    gap: .5rem;
    font-size: .75rem;

    a {
        font-size: .75rem;
        font-weight: 500;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.primary};
    }
    span {
        text-transform: capitalize;
        font-weight: 500;
    }
`