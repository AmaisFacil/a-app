import styled from 'styled-components';

import useViewport from '../../hooks/useViewport';

const { vw, vh } = useViewport();

export const Container = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    height: ${({height}) => height ? vh(height) : vh(7)};
    width: ${({width}) => width ? vw(width) : vw(70)};
    margin: ${({margin}) => margin ? margin : '1px'};
    justify-content: start;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;

    ${({ status, theme }) => {
        switch (status) {
            case 'error':
                return `
                    background-color: #FEBBBB;
                `;
            case 'alert':
                return `
                    background-color: #f4b788;
                `;
            default:
                return `

                `;
        }
    }}

`;

export const InputContainer = styled.TextInput`
    ${({ variant, theme }) => {
        switch (variant) {
            case 'outline':
                return `

                `;
            default:
                return `

                `;
        }
    }}
    margin: 0 20px;
    flex: 1;

`;
