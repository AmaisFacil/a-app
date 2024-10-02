import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import React from 'react';

import InformationButton from '../../components/informationButton';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const Saves = () => {
  const localRecords = useSelector((state) => state.record);
  const { navigate } = useNavigation();

  return (
    <Container>
      <Backnav text='Videos Salvos' backToHome />
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

          {
            (localRecords && localRecords.length > 0) ? localRecords.map((item, index) => {
              return (
                <InformationButton key={index} title={item?.name || ""} description={item?.description?.slice(0,150) || "sem descrição"} onPress={() => navigate('SavePreview', { save: item })}/>
              )
            })
            :
            <Title text={'nenhum video salvo disponivel'} size={20}/>
          }
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Saves;
