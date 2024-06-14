import React from 'react';

import {  Text } from './styles';

const Description = ({text, size, align}) => {
    
  return (
        <Text size={size} align={align}>
          {text}
        </Text>
  )
}

export default Description