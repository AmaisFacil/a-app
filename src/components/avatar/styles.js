import styled from 'styled-components';
import useViewport from '../../hooks/useViewport';

const { vw } = useViewport();

export const Container = styled.View`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'outline':
                return `
                    background-color: transparent;
                    border: 3px solid ${theme.colors.primary};

                `;
            default:
                return `
                    background-color: ${theme.colors.primary};
                    border: 1px solid ${theme.colors.background};
                `;
        }
    }}
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size ? vw(size) : vw(10)};
    height: ${({ size }) => size ? vw(size) : vw(10)};
    margin: ${({ margin }) => margin ? margin : '1px'};
    border-radius: 500px;
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
    font-size: 12px;
`;
