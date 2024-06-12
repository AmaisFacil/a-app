import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


import InformationButton from '../../components/informationButton';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';

const Historic = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Backnav text='Historico'/>
      <Content>
        <InformationButton title='Historico' onPress={() => navigate()}/>
      </Content>
    </Container>
  );
};

export default Historic;
