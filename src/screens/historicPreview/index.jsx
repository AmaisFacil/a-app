import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';


import InformationButton from '../../components/informationButton';
import { getHistoric } from '../../actions/user';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';
import { ScrollView } from 'react-native';

const HistoricPreview = () => {
  const { navigate } = useNavigation();

  const get = async () => {
    const response = await getHistoric();
    setHistoric(response);
  };

  useEffect(() => {
      get();
  },[])

  return (
    <Container>
      <Backnav text='Visualizar historico'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

        </ScrollView>
      </Content>
    </Container>
  );
};

export default HistoricPreview;
