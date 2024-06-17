import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import Feather from 'react-native-vector-icons/Feather';
import Backnav from '../../components/backnav';
import { Container, Content, ButtonContainer, Button } from './styles';

const CreateByCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
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
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
          <ButtonContainer>
            {(!recording && !videoUri) && (
              <Button onPress={handleRecord} disabled={isProcessing}>
                <Feather name="video" size={30} color="white" />
                <Text style={{ color: 'white' }}>Gravar</Text>
              </Button>
            )}
            {recording && (
              <Button onPress={handleStopRecording}>
                <Feather name="stop-circle" size={50} color="red" />
              </Button>
            )}
            {(!recording && videoUri) && (
              <Button onPress={() => alert('Gravação finalizada')} disabled={isProcessing}>
                <Feather name="save" size={30} color="white" />
                <Text style={{ color: 'white' }}>Finalizar</Text>
              </Button>
            )}
          </ButtonContainer>
        </Camera>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateByCamera;
