import styled from "styled-components";

export const Container = styled.div`
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