import styled from 'styled-components';

import useViewport from '../../hooks/useViewport';

const { vw, vh } = useViewport();

export const Container = styled.TouchableOpacity`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'outline':
                return `
                    background-color: transparent;
                    border: 4px solid ${theme.colors.primary};
                `;
            default:
                return `
                    background-color: ${theme.colors.primary};
                `;
        }
    }}

    ${({ icon }) => {
        return icon ? `
            justify-content: space-around;
            align-items: center;
            ` : `
            justify-content: center;
            align-items: center;
            `
        }}


    height: ${({height}) => height ? vh(height) : vh(7)};
    width: ${({width}) => width ? vw(width) : vw(50)};
    margin: ${({margin}) => margin ? margin : '1px'};
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    border-radius: 10px;

`;

export const Text = styled.Text`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'outline':
                return `
                    color: ${theme.colors.primary};
                `;
            default:
                return `
                    color: ${theme.colors.background};
                `;
        }
    }}
    letter-spacing: 1.5px;
    font-family: Black;
    font-size: 18px;
`;
