import styled from "styled-components";

interface PropsItem {
    active?: boolean;
}

export const Container = styled.aside`
    width: 300px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    background: ${({ theme }) => theme.colors.white};
    border-right: .5px solid #ABA7AE;

    position: fixed;
`
export const Header = styled.div`
    height: 72px;
    padding: 1rem;
    display: flex;
    align-items: center;

    border-bottom: .5px solid #ABA7AE;
`
export const Brand = styled.a`
    display: flex;
    align-items: center;
    height: 32px;
    img {
        height: 100%;
    }
`
export const Footer = styled.footer`

`
export const Configs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;

    border-top: .5px solid #ABA7AE;
`
export const Logout = styled.div`
    padding: 1.5rem 0;

    border-top: .5px solid #ABA7AE;
`
export const Item = styled.a<PropsItem>`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem 1.5rem;

    background: ${({ theme, active }) => active && theme.colors.primary};

    color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray_200};
    border-radius: ${({ active }) => active && '0 8px 8px 0'};
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }
`
export const Content = styled.div`
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
`
export const RealEstateContent = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1rem 1.5rem 1rem;
    border-bottom: .5px solid #ABA7AE;
`
export const RealEstateAvatar = styled.div`
    width: 56px;
    min-width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 50%;
    border: .5px solid #d3d3d3;
    margin-right: .5rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const RealEstateName = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray_200};
`