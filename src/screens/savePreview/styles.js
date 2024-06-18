// styles.js
import styled from "styled-components";
import Constants from 'expo-constants';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const Content = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  flex: 1;
`;

export const VideoContainer = styled.View`
  width: 100%;
  height: 200px;
  margin: 10px 0;
  background-color: #000;
`;
