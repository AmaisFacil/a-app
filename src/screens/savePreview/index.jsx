import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { Video } from 'expo-av';

import getLocationDetails from '../../utils/getLocationDetails';
import getUserDeviceInfo from '../../utils/getUserDeviceInfo';
import { removeLocalRecord } from '../../actions/localRecord';
import { createWebprove } from '../../actions/webprove';
import generateHash from '../../utils/generateHash';
import getLocation from '../../utils/getLocation';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import file from '../../utils/file';
import formatDate from '../../utils/formatDate';

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
    await file.saveToDownloads(save.uri);
    const hash = await generateHash(save.uri);
    const userDeviceInfo = await getUserDeviceInfo();
    const location = await getLocation();
    const locationDetails = await getLocationDetails(location.latitude, location.longitude);
    const data = {
      transactions: [{ transaction: false }, { transaction: false }],
      timestamp: new Date().toUTCString(), 
      pinataTimestamp: Date.now(), 
      hash,
      app: null,
      formatTimestamp: formatDate(new Date().toUTCString(), true),
      formatStart: formatDate(save.date, true),
      formatStop: formatDate(save.date + videoInfo.duration, true),
      ip: userDeviceInfo.ip,
      timezone: userDeviceInfo.timezone,
      org: userDeviceInfo.org,
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
        duration: videoInfo.duration / 1000,
        duraction: videoInfo.duration / 1000
      }, 
      pinata: {}, 
      link: "", 
      ...location,
      ...locationDetails
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
      <Backnav text={'Visualizar Video Salvo'}/>
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
          {
            (user.credits < 1 && !(user.role == 'admin'))  ? 
              <Button 
                width={90} 
                text='Creditos insuficientes' 
                icon='x-circle' 
                variant='error'
                margin='10px 0' 
              />
            :
              <Button 
                width={90} 
                text={'Gerar certificado'}
                icon='file-plus' 
                margin='10px 0' 
                loading={status === 'loading'} 
                onPress={handleCreateWebprove} 
              />
          }
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SavePreview;