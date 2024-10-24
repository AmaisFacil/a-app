import styled from "styled-components";
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  justify-content: space-around;
  background-color: transparent;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 0;
  left: 0;
`;