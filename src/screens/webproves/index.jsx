import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';


import InformationButton from '../../components/informationButton';
import { getHistoric } from '../../actions/user';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';
import { ScrollView } from 'react-native';

const Webproves = () => {
  const { navigate } = useNavigation();
  const [webproves, setWebproves] = useState([]);

  const get = async () => {
    const response = await getHistoric();
    setWebproves(response);
  };

  useEffect(() => {
      get();
  },[])

  return (
    <Container>
      <Backnav text='Webproves'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

          {
            (webproves && webproves.length > 0) ? webproves.map((item, index) => {
              return (
                <InformationButton key={index} title={formatDate(item?.date, true)} description={item?.message.replace('**','')} onPress={() => navigate('WebprovePreview', { webprove: item })}/>
              )
            })
            :
            <Title text={'nenhum webprove disponivel'} size={20}/>
          }
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Webproves;
