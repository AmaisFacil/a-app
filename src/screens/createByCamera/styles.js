import styled from 'styled-components';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import useViewportUnits from '../../hooks/useViewport';

const { vh, vw } = useViewportUnits();

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const VideoPreview = styled(Video)`
  flex: 1;
  width: 100%;
`;
