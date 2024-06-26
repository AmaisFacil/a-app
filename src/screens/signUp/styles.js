import styled from "styled-components";
import Constants from 'expo-constants';

import useViewportUnits from '../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    margin-top: ${Constants.statusBarHeight}px;
    flex: 1;
    `

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    padding: 5%;
    flex: 1;
    `

export const FormContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: auto;
    margin: ${vh(10)};
    `

export const ErrorText = styled.Text`
    font-size: ${({size}) => size ?  size + 'px' : '12px'};
    width: 100%;
    color: red;
`;