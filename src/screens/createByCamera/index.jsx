import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import { Container, Content, ButtonContainer } from './styles';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import file from '../../utils/file'; 

const CreateByCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);
  const cameraRef = useRef(null);

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
      console.log(uri, savedVideoUri)
      if (savedVideoUri.error) return setError('Ouve um erro ao salvar o video');
        console.log(`Vídeo salvo em: ${savedVideoUri}`);
   
  }

  const onCameraReady = useCallback(() => {
    setCameraReady(true);
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  return (
    <Container>
      <Backnav text='Criar pela câmera' />
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
