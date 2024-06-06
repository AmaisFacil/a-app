import React from 'react';

import {  Text } from './styles';

const Title = ({text, size}) => {
    
  return (
        <Text size={size}>
          {text}
        </Text>
  )
}

export default Title