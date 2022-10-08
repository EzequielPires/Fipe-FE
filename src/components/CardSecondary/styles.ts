import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 308px;

    background: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.gray_500};
    border-radius: 8px;

    padding: 1rem;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    border-bottom: 1px solid ${({theme}) => theme.colors.gray_500};
`
export const Body = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
` 
export const Tag = styled.span`
    width: fit-content !important;
    padding: 10px;
    background: ${({theme}) => theme.colors.gray_500};
    color: ${({theme}) => theme.colors.gray_200};
    font-size: .875rem;
    font-weight: 500;
    border-radius: 8px;
` 
export const Content = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
` 
export const Details = styled.div`
` 
export const Title = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray_200};
` 
export const Subtitle = styled.div`
    font-size: .875rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray_200};
` 
export const Code = styled.div`
    font-size: .875rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray_200};
` 
export const Price = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray_200};
` 
export const ImageWrapper = styled.div`
    width: 110px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
` 
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
` 
export const GroupButtons = styled.div`
    max-width: 380px;
    display: flex;
    gap: .5rem;
    margin-top: 1rem;
` 
export const ButtonPrimary = styled.button`
    width: 100%;
    height: 44px;

    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background: ${({theme}) => theme.colors.primary};
    
    border: 0;
    border-radius: 8px;
` 
export const ButtonSecondary = styled.button`
    width: 100%;
    height: 44px;

    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background: ${({theme}) => theme.colors.gray_200};

    border: 0;
    border-radius: 8px;
`