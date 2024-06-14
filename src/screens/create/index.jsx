import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import { ScrollView } from 'react-native';

const Create = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Backnav text='Criar'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

        </ScrollView>
      </Content>
    </Container>
  );
};

export default Create;
