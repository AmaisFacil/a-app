import { ScrollView } from 'react-native';
import React from 'react';

import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const HistoricPreview = ({route}) => {
  const { historic } = route.params;

  return (
    <Container>
      <Backnav text='Visualizar historico'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Data" size={22}/>
          <Description text={formatDate(historic.date, true)}/>
          <Title text="Ação" size={22}/>
          <Description text={historic?.message.replace('**','')}/>
          <Title text="Identificador" size={22}/>
          <Description text={historic._id}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default HistoricPreview;
