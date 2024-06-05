import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Text } from './styles';
import { useTheme } from 'styled-components';

const Button = ({ text, variant, margin, onPress, icon, width, height, reverse }) => {
  const theme = useTheme();

  const getIconColor = () => {
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
        icon ? <Feather size={30} name={icon} color={getIconColor()} /> : null
      }
      <Text variant={variant}>
        {text && text.toUpperCase()}
      </Text>
    </Container>
  );
}

export default Button;
