import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Loading = ({text}) => {
  const theme = useTheme();

  return (
    <Container>
          <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content"></StatusBar>
          <ActivityIndicator size={30} color={"#363636"} />
          {text && <Text>{text}</Text>}
    </Container>
  )
}

export default Loading