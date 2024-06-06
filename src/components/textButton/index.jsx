import React from 'react';

import {  Container, Text } from './styles';

const TextButton = ({ text, onPress, margin, size}) => {
    
  return (
    <Container onPress={onPress} margin={margin} size={size}>
      <Text>
        {text}
      </Text>
    </Container>
  )
}

export default TextButton