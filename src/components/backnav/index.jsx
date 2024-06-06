import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import React from "react";

import { Container, Text, IconButton } from "./styles";

const Backnav = ({text, variant, margin, width, height, padding}) => {
    const { goBack } = useNavigation();
    const theme = useTheme();

    const getIconColor = () => {
      switch (variant) {
        case 'transparent':
          return theme.colors.text;
        default:
          return theme.colors.background;
      }
    };

    return (
        <Container variant={variant} margin={margin} width={width} height={height} padding={padding}>       
            <IconButton onPress={goBack}>
                <Feather name="arrow-left" color={getIconColor()} size={30} />
            </IconButton>
            <Text variant={variant}>
              {text}
            </Text>
        </Container>
    )
}

export default Backnav