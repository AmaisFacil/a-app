import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native';


import InformationButton from '../../components/informationButton';
import { getWebproves } from '../../actions/webprove';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const Webproves = () => {
  const { navigate } = useNavigation();
  const [webproves, setWebproves] = useState([]);

  const get = async () => {
    const response = await getWebproves();
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
                <InformationButton key={index} title={item.form?.name || ""} description={item.form?.details.slice(0,150) || "sem descrição"} onPress={() => navigate('WebprovePreview', { webprove: item })}/>
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
