import { ScrollView } from 'react-native';
import React, { useState } from 'react';

import { getDocument } from '../../actions/certificate';
import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Title from '../../components/title';

const SavePreview = ({route}) => {
  const { save } = route.params;
  const [status, setStatus] = useState("");

  const handleDownload = async () => {
    setStatus('loading');
    var response = await getDocument(save.fileId);
    console.log(response)
    setStatus('');
  }

  return (
    <Container>
      <Backnav text='Visualizar Video Salvo'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Nome" size={20}/>
          <Description text={save.name || "sem nome."}/>
          <Button width={90} text='download' icon='download' margin='25px 0' loading={status=='loading'} onPress={handleDownload}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SavePreview;
