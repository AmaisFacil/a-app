import styled from "styled-components";

import useViewport from '../../hooks/useViewport';

const { vw, vh } = useViewport();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-evenly;
    min-height: ${vh(30)};
    align-items: center;
    border-radius: 10px;
    margin: 10px 0;
    padding: 5%;
    height: auto;
    width: 100%;
`;

export const ValueContainer = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
`

export const ValueText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Black';
    margin: 10px 5px;
    font-size: 25px;
`;