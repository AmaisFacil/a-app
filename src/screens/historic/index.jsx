import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';


import InformationButton from '../../components/informationButton';
import { getHistoric } from '../../actions/user';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';
import { ScrollView } from 'react-native';

const Historic = () => {
  const { navigate } = useNavigation();
  const [historic, setHistoric] = useState([]);

  const get = async () => {
    const response = await getHistoric();
    setHistoric(response);
  };

  useEffect(() => {
      get();
  },[])

  return (
    <Container>
      <Backnav text='Historico'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

          {
            (historic && historic.length > 0) ? historic.map((item, index) => {
              return (
                <InformationButton key={index} title={formatDate(item?.date, true)} description={item?.message.replace('**','')} onPress={() => navigate('HistoricPreview', { historic: item })}/>
              )
            })
            :
            <Title text={'nenhum historico disponivel'} size={20}/>
          }
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Historic;
