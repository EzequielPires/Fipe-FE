import styled, { css } from "styled-components";

interface Props {
    icon: boolean;
    error: boolean;
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    svg {
        position: absolute;
        top: 40px;
        left: 12px;

        color: ${({theme}) => theme.colors.gray_200};
        font-size: 1.5rem;
        :nth-child(3) {
            left: unset !important;
            right: 12px;
            cursor: pointer;
        }
    }
    ${({error}) => error && css`
        label {
            color: #f94949;
        }
    `}
`
export const Label = styled.label`
    font-size: .875rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray_200};
    margin-bottom: 6px;
`
export const Input = styled.input<Props>`
    height: 48px;
    border: .5px solid #d9d9d9;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.white};
    padding: ${({icon}) => icon ? '0 2.6rem' : '0 .75rem'};
    color: ${({theme}) => theme.colors.gray_200};
    font-size: .875rem;
    width: 100%;
    transition: .3s;
    ::placeholder {
        color: ${({theme}) => theme.colors.gray_300};
    }
    :focus {
        border: .5px solid ${({theme}) => theme.colors.gray_200};
        outline: 0;
    }
    ${({error, theme}) => error && css`
        border: 1px solid #f94949 !important;
    `}
`
export const Error = styled.span`
    width: fit-content;
    display: flex;
    align-items: center;
    margin-top: .875rem;
    padding: 6px 12px;
    border-radius: 8px;
    background: #fff0f0;
    color: #f94949;
    font-size: .75rem;
    font-weight: 500;

    svg {
        font-size: 1rem;
        margin-right: .25rem;
    }
`