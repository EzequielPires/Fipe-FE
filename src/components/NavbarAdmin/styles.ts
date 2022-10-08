import styled from "styled-components";

export const Container = styled.nav`
    position: fixed;
    top: 0;
    right: 0;

    width: calc(100% - 300px);
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: .5px solid #ABA7AE;
    background: ${({ theme }) => theme.colors.white};

    padding: 10px 24px;
`
export const RouteActive = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    svg {
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.gray_200};
    }
`
export const RouteActiveTitle = styled.div`
    color: ${({theme}) => theme.colors.gray_200};
`
export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.gray_200};
    }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Avatar = styled.div`
    width: 56px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    border: .5px solid #d3d3d3;
    //box-shadow: 0 0 4px rgba(170, 170, 170, .25);
    padding: .25rem;
    border-radius: 50%;
    span {
        color: ${({theme}) => theme.colors.gray_200};
        font-size: 1.2rem;
        font-weight: 600;
    }
    img {
        width: 100%;
    }
`
export const UserName = styled.div`
    color: ${({theme}) => theme.colors.gray_200};
    font-weight: 500;
`