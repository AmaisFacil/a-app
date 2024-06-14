import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Description from '../../components/description';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const Create = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Backnav text='Criar'/>
      <Content>
        <Title text="Registros gratuitos"/>
        <Description text="Faça o registro gratuito de ocorridos e só emita um certificado caso necessario!" align='center' /> 
      </Content>
    </Container>
  );
};

export default Create;
