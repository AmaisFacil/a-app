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
    align-items: center;
    padding: 5%;
    flex: 1;
    `

export const Navbar= styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: ${vw(100)};
    height: ${vh(10)};
    padding: 15px 5%;
    margin: 0;
`

export const CategoryTitle = styled.View`
    justify-content: start;
    flex-direction: row;
    align-items: center;
    margin: ${vh(4)} 0;
    width: 100%;
`

export const ServiceButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    min-height: ${vw(25)};
    height: auto;
    margin: ${vw(2)};
    padding: 10px;
    flex: 1;
`
export const ServiceContainer = styled.View`
    justify-content: center;
    width: 100%;
`   
export const ServiceText = styled.Text`
    color: ${({theme}) => theme.colors.secondaryText};
    margin-top: 10px 0;
    font-size: 15px;

`   
export const PlainsContainer = styled.View`
    flex-direction: column;
    align-items: center;
    width: 100%;
`   
