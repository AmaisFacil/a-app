import React from 'react';

import {  Text } from './styles';

const Description = ({text, size}) => {
    
  return (
        <Text size={size}>
          {text}
        </Text>
  )
}

export default Description