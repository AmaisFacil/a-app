import { ScrollView } from 'react-native';
import React, { useState } from 'react';

import { getDocument } from '../../actions/certificate';
import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Title from '../../components/title';

const WebprovePreview = ({route}) => {
  const { certificate } = route.params;
  const [status, setStatus] = useState("");

  const handleDownload = async () => {
    setStatus('loading');
    var response = await getDocument(certificate.fileId);
    setStatus('');
  }

  return (
    <Container>
      <Backnav text='Visualizar certificado'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Nome" size={20}/>
          <Description text={certificate.title || "sem nome."}/>
          <Title text="Descrição" size={20}/>
          <Description text={certificate.description || "sem descrição."}/>
          <Title text="Identificador" size={20}/>
          <Description text={certificate._id}/>
          <Button width={90} text='download' icon='download' margin='25px 0' loading={status=='loading'} onPress={handleDownload}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default WebprovePreview;
