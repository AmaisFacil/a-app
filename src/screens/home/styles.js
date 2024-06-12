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