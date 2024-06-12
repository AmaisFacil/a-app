import Feather from 'react-native-vector-icons/Feather';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import React from 'react';

import { Container, Text } from './styles';

const Button = ({ text, variant, margin, onPress, icon, width, height, reverse, loading }) => {
  const theme = useTheme();

  const getThemeColor = () => {
    switch (variant) {
      case 'outline':
        return theme.colors.primary;
      default:
        return theme.colors.background;
    }
  };

  return (
    <Container variant={variant} icon={icon} width={width} height={height} margin={margin} onPress={onPress} reverse={reverse}>
      {
        (icon  && !loading) ? <Feather size={30} name={icon} color={getThemeColor()} /> : null
      }
      {
        loading ? <ActivityIndicator size={30} color={getThemeColor()} /> : <Text variant={variant}> {text && text.toUpperCase()} </Text>
      }
    </Container>
  );
}

export default Button;
