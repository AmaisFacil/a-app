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
  flex: 1;
  position: relative;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: blue;
  border-radius: 10px;
`;

export const ToggleButtonContainer = styled.View`
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const ToggleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;
