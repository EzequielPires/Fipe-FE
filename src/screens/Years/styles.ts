import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    overflow: hidden;

    background: ${({theme}) => theme.colors.background};
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
        background:  ${({theme}) => theme.colors.white};
        font-size: .875rem;
        transition: .3s;
        text-transform: uppercase;

        :hover {
            color: ${({theme}) => theme.colors.primary};
            border: .5px solid ${({theme}) => theme.colors.primary};
            svg {
                color: ${({theme}) => theme.colors.primary};
            }
        }
    }
`
export const Title = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray_200};
    margin-bottom: 1rem;
`
export const Loading = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    position: fixed;
    top: 0;
    left: 0;
    background: #1d1d1df5;

    color: #fff;
`
export const Span = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #fff;
    :nth-child(1) {
        animation-name: Animation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    :nth-child(2) {
        animation-name: Animation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: .1s;
    }
    :nth-child(3) {
        animation-name: Animation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: .2s;
    }
    @keyframes Animation {
    0%  {
        transform: translateY(-4px);
    }
    50%  {
        transform: translateY(4px);
    }
    100% {
        transform: translateY(-4px);
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
        color: ${({theme}) => theme.colors.primary};
    }
    span {
        text-transform: capitalize;
        font-weight: 500;
    }
`