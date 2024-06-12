import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { useTheme } from 'styled-components';

import {  Container, TextContainer } from './styles';
import Description from '../description';
import Title from '../title';

const InformationButton = ({ title, description, onPress }) => {
    const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <TextContainer>
        <Title text={title} size={20}/>
        {
          description ? <Description text={description}/> : null
        }
      </TextContainer>
      <Feather size={30} name='arrow-right' color={theme.colors.secondaryText} />
    </Container>
  )
}

export default InformationButton