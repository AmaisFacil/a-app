import { Linking, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Title from '../../components/title';

const WebprovePreview = ({route}) => {
  const { webprove } = route.params;
  const [status, setStatus] = useState("");

  const getSecondsFromMs = (duration) => Math.floor((duration / 1000) % 60);

  const handleDownload = async () => {
    setStatus('loading');
    const url = 'https://agenciamaisfacil.com.br/webprove/download/' + webprove._id;
    Linking.openURL(url)
    setStatus('');
  }

  return (
    <Container>
      <Backnav text='Visualizar webprove'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Nome" size={20}/>
          <Description text={webprove.form.name || "sem nome."}/>
          <Title text="Descrição" size={20}/>
          <Description text={webprove.form.details || "sem descrição."}/>
          <Title text="Identificador" size={20}/>
          <Description text={webprove._id}/>
          <Title text="Localização" size={20}/>
          <Description text={webprove.city ? `${webprove.city}, ${webprove.region_code}, ${webprove.country_name}` : "sem localização."}/>
          <Title text="IP" size={20}/>
          <Description text={webprove.ip ? `${webprove.ip}` : "sem IP."}/>
          <Title text="Hash" size={20}/>
          <Description text={`${webprove.hash}`}/>
          <Title text="Identificador do arquivo" size={20}/>
          <Description text={`${webprove.fileId}`}/>
          <Title text="Horario de registro" size={20}/>
          <Description text={`${formatDate(webprove.date, true)}`}/>
          <Title text="Inicio da gravação" size={20}/>
          <Description text={`${formatDate(webprove.form.start, true)}`}/>
          <Title text="Fim da gravação" size={20}/>
          <Description text={`${formatDate(webprove.form.stop, true)}`}/>
          <Title text="Duração" size={20}/>
          <Description text={`${getSecondsFromMs(webprove.form.duraction) || 0} segundos`}/>
          <Title text="CPF/CNPJ" size={20}/>
          <Description text={`${webprove.form.cpf}`}/>
          <Button width={90} text='download' icon='download' margin='25px 0' loading={status=='loading'} onPress={handleDownload}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default WebprovePreview;
