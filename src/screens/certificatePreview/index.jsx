import { Linking, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Description from '../../components/description';
import formatDate from '../../utils/formatDate';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Title from '../../components/title';

const CertificatePreview = ({route}) => {
  const { certificate } = route.params;
  const [status, setStatus] = useState("");

  const handleDownload = async () => {
    setStatus('loading');
    const url = 'https://agenciamaisfacil.com.br/record/download/' + certificate._id;
    Linking.openURL(url)
    setStatus('');
  }

  return (
    <Container>
      <Backnav text='Visualizar certificado'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title text="Nome" size={20}/>
          <Description text={certificate.title || "sem nome."}/>
          <Title text="Tipo" size={20}/>
          <Description text={certificate.type || "sem tipo."}/>
          <Title text="Data de registro" size={20}/>
          <Description text={formatDate(certificate.date, true)}/>
          <Title text="Descrição" size={20}/>
          <Description text={certificate.description || "sem descrição."}/>
          <Title text="Identificador" size={20}/>
          <Description text={certificate._id}/>
          <Title text="Hash" size={20}/>
          <Description text={certificate.document.hash}/>
          <Title text="Autor" size={20}/>
          <Description text={`${certificate.authorName || "sem nome"} - ${certificate.authorCpf || "sem CPF"}`}/>
          <Title text="Proprietario" size={20}/>
          <Description text={`${certificate.ownerName || "sem nome"} - ${certificate.ownerCpf || "sem CPF"}`}/>
          <Title text="Nome do arquivo" size={20}/>
          <Description text={certificate.file.name}/>
          <Title text="Tamanho do arquivo" size={20}/>
          <Description text={certificate.file.size}/>
          <Title text="Hash do arquivo" size={20}/>
          <Description text={certificate.file.hash}/>
          <Title text="Identificador do arquivo" size={20}/>
          <Description text={certificate.document.id}/>
          <Button width={90} text='download' icon='download' margin='25px 0' loading={status=='loading'} onPress={handleDownload}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default CertificatePreview;
