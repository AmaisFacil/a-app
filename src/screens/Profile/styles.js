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

export const ProfileInformations = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: ${vh(10)};
    width: 100%;
`
export const ProfileSection = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: end;
`