import React, { useState, useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Backnav from '../../components/backnav';
import { Container, Content, ButtonContainer, Button, VideoPreview } from './styles';

const CreateByCamera = () => {
  const { navigate } = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();

        setHasPermission(cameraStatus === 'granted' && audioStatus === 'granted');
      } catch (error) {
        console.error('Failed to get permissions:', error);
        setHasPermission(false);
      }
    })();
  }, []);

  const handleRecord = async () => {
    if (cameraRef.current && cameraReady) {
      try {
        console.log('Starting recording...');
        setRecording(true);
        const video = await cameraRef.current.recordAsync({
          quality: Camera.Constants.VideoQuality['720p'],
          maxDuration: 60,
        });
        console.log('Recording complete', video.uri);
        setVideoUri(video.uri);
        setRecording(false);
        setRecorded(true);
      } catch (error) {
        console.error('Recording error:', error);
        setRecording(false);
      }
    } else {
      console.warn('Camera not ready or not available');
    }
  };

  const handleStopRecording = () => {
    if (cameraRef.current && recording) {
      console.log('Stopping recording...');
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  const handleDelete = () => {
    setRecorded(false);
    setVideoUri(null);
    // Delete video logic if needed
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Vídeo salvo:', videoUri);
    setRecorded(false);
    setVideoUri(null);
    navigate('Home'); // or the desired screen
  };

  const onCameraReady = () => {
    console.log('Camera is ready');
    setCameraReady(true);
  };

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
          type={Camera.Constants.Type.back}
          ratio={'16:9'}
          onCameraReady={onCameraReady}
        >
          {videoUri && !recording ? (
            <VideoPreview
              source={{ uri: videoUri }}
              style={{ flex: 1, width: '100%' }}
              resizeMode="contain"
              shouldPlay
              isLooping
            />
          ) : null}

          <ButtonContainer>
            {!recording && !recorded && (
              <Button onPress={handleRecord}>
                <Ionicons name="camera" size={30} color="white" />
                <Text style={{ color: 'white' }}>Gravar</Text>
              </Button>
            )}
            {recording && (
              <Button onPress={handleStopRecording}>
                <Ionicons name="stop" size={30} color="white" />
                <Text style={{ color: 'white' }}>Parar</Text>
              </Button>
            )}
            {!recording && recorded && (
              <>
                <Button onPress={handleDelete}>
                  <Ionicons name="trash" size={30} color="white" />
                  <Text style={{ color: 'white' }}>Apagar</Text>
                </Button>
                <Button onPress={handleSave}>
                  <Ionicons name="save" size={30} color="white" />
                  <Text style={{ color: 'white' }}>Salvar</Text>
                </Button>
              </>
            )}
          </ButtonContainer>
        </Camera>
      </Content>
    </Container>
  );
};

export default CreateByCamera;
