import styled from "styled-components";
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

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
  background-color: transparent;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconText = styled.Text`
  color: white;
  margin-left: 5px;
`;
