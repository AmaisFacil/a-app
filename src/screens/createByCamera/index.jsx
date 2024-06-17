import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Camera, CameraType } from 'expo-camera';

import { Container, Content, ButtonContainer, Button, LoadingContainer, IconText } from './styles';
import Backnav from '../../components/backnav';

const CreateByCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
        setHasPermission(cameraStatus === 'granted' && audioStatus === 'granted');
      } catch (error) {
        console.error('Falha ao obter permissões:', error);
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
        setVideoUri(video.uri);
      } catch (error) {
        console.error('Erro ao gravar:', error);
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

  const onCameraReady = useCallback(() => {
    setCameraReady(true);
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem permissão para acessar a câmera ou áudio</Text>;
  }

  return (
    <Container>
      <Backnav text='Criar pela câmera' />
      <Content>
        <Camera
          ref={cameraRef}
          style={{ flex: 1, width: '100%' }}
          type={CameraType.back}
          onCameraReady={onCameraReady}
        >
          {isProcessing && (
            <LoadingContainer>
              <ActivityIndicator size="large" color="#ffffff" />
            </LoadingContainer>
          )}
          <ButtonContainer>
            {(!recording && !videoUri) ? (
              <Button onPress={handleRecord} disabled={isProcessing}>
                <Feather name="video" size={30} color="white" />
                <IconText>Gravar</IconText>
              </Button>
            ): null}
            {recording && (
              <Button onPress={handleStopRecording}>
                <Feather name="stop-circle" size={50} color="white" />
              </Button>
            )}
            {(!recording && videoUri) ? (
              <Button onPress={() => alert('Gravação finalizada')} disabled={isProcessing}>
                <Feather name="save" size={30} color="white" />
                <IconText>Salvar</IconText>
              </Button>
            ): null}
          </ButtonContainer>
        </Camera>
      </Content>
    </Container>
  );
};

export default CreateByCamera;
