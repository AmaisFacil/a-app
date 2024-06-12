import { ScrollView } from 'react-native';
import React from 'react';

import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const WebprovePreview = ({route}) => {
  const { webprove } = route.params;

  return (
    <Container>
      <Backnav text='Visualizar webprove'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Nome" size={22}/>
          <Description text={webprove.form.name || "sem nome."}/>
          <Title text="Descrição" size={22}/>
          <Description text={webprove.form.details || "sem descrição."}/>
          <Title text="Identificador" size={22}/>
          <Description text={webprove._id}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default WebprovePreview;
