import styled from "styled-components";

import useViewport from '../../hooks/useViewport';

const { vw, vh } = useViewport();

export const Container = styled.View`
        ${({ variant, theme }) => {
        switch (variant) {
            case 'transparent':
                return `
                    background-color: transparent;
                `;
            default:
                return `
                    background-color: ${theme.colors.primary};
                `;
        }
    }}

    padding: 15px ${({padding}) => padding ? padding : '5%'};
    height: ${({height}) => height ? vh(height) : vh(10)};
    width: ${({width}) => width ? vw(width) : vw(100)};
    margin: ${({margin}) => margin ? margin : '0'};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const IconButton = styled.TouchableOpacity`
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border: none;
    height: auto;
    width: auto;
`

export const Text = styled.Text`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'transparent':
                return `
                    color: ${theme.colors.text};
                `;
            default:
                return `
                    color: ${theme.colors.background};
                `;
        }
    }}

    letter-spacing: 1.5px;
    font-family: 'Black';
` 