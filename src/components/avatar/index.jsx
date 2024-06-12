import { Image } from 'react-native';
import React from 'react';

import { Container, Text } from './styles';

const Avatar = ({ name, image, variant, size, margin }) => {

  const getInitials = () => {
    if (!name) return '';
    const initials = name.split(' ').map(word => word[0].toUpperCase()).join('');
    return initials;
  };

  return (
    <Container 
      variant={variant} 
      size={size} 
      margin={margin}
    >
      {
        image ? <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: size / 2 }} /> :
        <Text variant={variant}> {getInitials()} </Text>
      }
    </Container>
  );
}

export default Avatar;
