import React from 'react';

import {  Text } from './styles';

const Title = ({text, size, align}) => {
    
  return (
        <Text size={size} align={align}>
          {text}
        </Text>
  )
}

export default Title