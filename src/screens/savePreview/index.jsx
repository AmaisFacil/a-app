import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { Video } from 'expo-av';

import { removeLocalRecord } from '../../actions/localRecord';
import { createWebprove } from '../../actions/webprove';
import generateHash from '../../utils/generateHash';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';

const SavePreview = ({ route }) => {
  const [videoInfo, setVideoInfo] = useState({ duration: null, size: null });
  const [form, setForm] = useState({ details: "", name: "" });
  const [status, setStatus] = useState("");
  const { save } = route.params;

  const user = useSelector((state) => state.user);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideoInfo = async () => {
      if (videoRef.current) {
        const status = await videoRef.current.getStatusAsync();
        setVideoInfo({
          duration: status.durationMillis,
          size: null 
        });
      }
    };
    getVideoInfo();
  }, [save.uri]);

  const handleCreateWebprove = async () => {
    setStatus('loading');
    const hash = await generateHash(save.uri);
    const data = {
      transactions: [{ transaction: false }, { transaction: false }],
      timestamp: new Date().toUTCString(), 
      pinataTimestamp: Date.now(), 
      hash,
      app: null,
      email: user.email, 
      name: user.name, 
      size: videoInfo.size || 0,
      cid: hash, 
      form: {
        ...form,
        cpf: user.cpf,
        urls: "",
        start: save.date,
        stop: save.date + videoInfo.duration, 
        duration: videoInfo.duration / 1000
      }, 
      pinata: {}, 
      link: "", 
    };

    await createWebprove(data);
    await removeLocalRecord(dispatch, save.uri);
    setStatus('');
    navigate('Webproves');
  };

  const handleDeleteWebprove = async () => {
    setStatus('loading');
    await removeLocalRecord(dispatch, save.uri);
    setStatus('');
    navigate('Saves');
  };

  return (
    <Container>
      <Backnav text='Visualizar Video Salvo'/>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Video
            ref={videoRef}
            source={{ uri: save.uri }}
            onLoad={(status) => {
              setVideoInfo({
                duration: status.durationMillis, 
                size: null 
              });
            }}
            style={{ width: '100%', height: 200 }} 
            useNativeControls
          />
          <Input 
            placeholder='Nome do certificado' 
            value={form.name} 
            onChangeText={(x) => setForm({ ...form, name: x })} 
            margin="10px 0" 
            width={90} 
          />
          <Input 
            placeholder='Descrição do certificado' 
            value={form.details} 
            onChangeText={(x) => setForm({ ...form, details: x })}  
            margin="1px 0" 
            width={90} 
          />
          <Button 
            width={90} 
            text='Gerar certificado' 
            icon='file-plus' 
            margin='10px 0' 
            loading={status === 'loading'} 
            onPress={handleCreateWebprove} 
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SavePreview;