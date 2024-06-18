import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native';


import InformationButton from '../../components/informationButton';
import { getCertificates } from '../../actions/certificate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';
import { getLocalRecords } from '../../actions/localRecord';

const Saves = () => {
  const { navigate } = useNavigation();
  const [certificates, setCertificates] = useState([]);

  const get = async () => {
    const response = await getCertificates();
    const saves = await getLocalRecords();
    console.log(saves)
    setCertificates(response);
  };

  useEffect(() => {
      get();
  },[])

  return (
    <Container>
      <Backnav text='Videos Salvos'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>

          {
            (certificates && certificates.length > 0) ? certificates.map((item, index) => {
              return (
                <InformationButton key={index} title={item?.title || ""} description={item?.description.slice(0,150) || "sem descrição"} onPress={() => navigate('CertificatePreview', { certificate: item })}/>
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
