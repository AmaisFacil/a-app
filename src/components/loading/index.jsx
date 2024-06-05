import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, Text} from './styles';

const Loading = ({text}) => {
  return (
    <Container>
          <StatusBar backgroundColor={"#F6D03C"} barStyle="light-content"></StatusBar>
          <ActivityIndicator size={30} color={"#363636"} />
          {text && <Text>{text}</Text>}
    </Container>
  )
}

export default Loading