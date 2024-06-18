import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
//import { Video } from 'expo-av';

import { Container, Content, VideoContainer } from './styles';
import { removeLocalRecord } from '../../actions/localRecord';
import { createWebprove } from '../../actions/webprove';
import generateHash from '../../utils/generateHash';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Input from '../../components/input';

const SavePreview = ({ route }) => {
  const [form, setForm] = useState({details: "", name:""});
  const [status, setStatus] = useState("");
  const { save } = route.params;
  
  const user = useSelector((state) => state.user);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleCreateWebprove = async () => {
    setStatus('loading');
    const hash = await generateHash(save.uri);
    const data = {
      transactions: [{transaction: false},{transaction: false}],
      timestamp: new Date().toUTCString(Date.now()), 
      pinataTimestamp: Date.now(), 
      hash,
      app: null,
      email: user.email, 
      name: user.name, 
      size: null,
      cid: hash, 
      form: {
        ...form,
        cpf: user.cpf,
        urls: "",
        start: null,
        stop: null, 
        duraction:  null
      }, 
      pinata:{}, 
      link:"", 
    }
    await createWebprove(data);
    await removeLocalRecord(dispatch, save.uri)
    setStatus('');
    navigate('Webproves')
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

          <Input placeholder='nome do certificado' value={form.name} onChangeText={(x) => setForm({...form, name: x})} margin="10px 0" width={90}/>
          <Input placeholder='descrição do certificado' value={form.details} onChangeText={(x) => setForm({...form, details: x})}  margin="1px 0" width={90}/>
          <Button width={90} text='gerar certificado' icon='file-plus' margin='10px 0' loading={status == 'loading'} onPress={handleCreateWebprove}/>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SavePreview;

/*
<Button width={90} text='apagar' icon='trash' margin='10px 0' loading={status == 'loading'} variant='error' onPress={handleDeleteWebprove}/>
        
<VideoContainer>
  <Video
    source={{ uri: save.uri }}
    useNativeControls
    resizeMode="contain"
    style={{ width: '100%', height: 200 }} 
  />
</VideoContainer>
 */