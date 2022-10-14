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

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: .875rem;
        font-weight: 500;
    }
`
export const Title = styled.h2`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_100};
    strong {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
    }
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
export const Form = styled.form`
    margin-top: 1.5rem;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
`
export const Button = styled.button`
    width: 375px;
    height: 48px;
    border-radius: 8px;
    border: .5px solid ${({ theme }) => theme.colors.primary};
    padding: 0 2rem;

    color: ${({ theme }) => theme.colors.primary};
    font-size: .875rem;
    font-weight: 500;
    
    background: ${({ theme }) => theme.colors.primary_light};
    transition: .3s;
    :hover {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};
    }
`
