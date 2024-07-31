import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useDispatch } from 'react-redux';

import { Container, Content, ButtonContainer } from './styles';
import { addLocalRecord } from '../../actions/localRecord';
import Description from '../../components/description';
import formatDate from '../../utils/formatDate'; 
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import file from '../../utils/file'; 

const CreateByCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);
  
  const { navigate } = useNavigation();
  const cameraRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        if (!(cameraStatus === 'granted')) setError('Sem permissão para acessar a câmera ou áudio');
        const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
        if (!(audioStatus === 'granted')) setError('Sem permissão para acessar a câmera ou áudio');
        setHasPermission(cameraStatus === 'granted' && audioStatus === 'granted');
      } catch (error) {
        setError('Sem permissão para acessar a câmera ou áudio')
        setHasPermission(false);
      }
    })();
  }, []);

  const handleRecord = useCallback(async () => {
    if (cameraRef.current && cameraReady && !recording && !isProcessing) {
      try {
        setRecording(true);
        setIsProcessing(true);
        const video = await cameraRef.current.recordAsync();
        handleSave(video.uri);
      } catch (error) {
        setError('Ouve um erro executar a gravação');
      } finally {
        setRecording(false);
        setIsProcessing(false);
      }
    }
  }, [cameraReady, recording, isProcessing]);

  const handleStopRecording = useCallback(() => {
    if (cameraRef.current && recording) {
      cameraRef.current.stopRecording();
    }
  }, [recording]);

  const handleSave = async (uri) => {
      const savedVideoUri = await file.save(uri);
      if (savedVideoUri.error) return setError('Ouve um erro ao salvar o video');
      const record = {
        name: formatDate(Date.now(), true),
        uri: savedVideoUri,
        date: Date.now(),
      }
      await addLocalRecord(dispatch, record);
      navigate('Saves');
   
  }

  const onCameraReady = useCallback(() => {
    setCameraReady(true);
  }, []);

  if (hasPermission === null) {
    return null;
  }

  return (
    <Container>
      <Backnav text='Criar pela câmera' backToHome/>
      {
        error ? (
          <Content> 
            <Description text={error}/>
          </Content>
        ) : (
          <Content>
            <Camera
              ref={cameraRef}
              style={{ flex: 1, width: '100%' }}
              type={CameraType.back}
              onCameraReady={onCameraReady}
            >
              <ButtonContainer>
                {(!recording) && (
                  <Button onPress={handleRecord} text='Gravar' icon='video'/>
                )}
                {recording && (
                  <Button onPress={handleStopRecording} text='Finalizar' icon='stop-circle'/>
                )}
              </ButtonContainer>
            </Camera>
          </Content>
        ) 
      }
    </Container>
  );
};

export default CreateByCamera;
