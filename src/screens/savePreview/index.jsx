import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Video } from 'expo-av';

import { Container, Content, VideoContainer } from './styles';
import { removeLocalRecord } from '../../actions/localRecord';
import { getDocument } from '../../actions/certificate';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Title from '../../components/title';

const SavePreview = ({ route }) => {
  const [status, setStatus] = useState("");
  const { save } = route.params;
  
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleCreateWebprove = async () => {
    setStatus('loading');

    setStatus('');
    navigate('Saves')
  };
  const handleDeleteWebprove = async () => {
    setStatus('loading');
    await removeLocalRecord(dispatch, save.uri)
    setStatus('');
    navigate('Saves')
  };

  return (
    <Container>
      <Backnav text='Visualizar Video Salvo'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VideoContainer>
            <Video
              source={{ uri: save.uri }}
              useNativeControls
              resizeMode="contain"
              style={{ width: '100%', height: 200 }} 
            />
          </VideoContainer>
          <Title text="Nome" size={20}/>
          <Description text={save.name || "sem nome."}/>
          <Button width={90} text='gerar certificado' icon='file-plus' margin='10px 0' loading={status == 'loading'} onPress={handleCreateWebprove}/>
          <Button width={90} text='apagar' icon='trash' margin='10px 0' loading={status == 'loading'} variant='error' onPress={handleDeleteWebprove}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SavePreview;
