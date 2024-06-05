// InitialPage.js
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import image from '../../../assets/imgs/initial-login.png'
import { Container, Image, TitleContainer, Title, Description } from './styles';
import Button from '../../components/button';
const InitialPage = () => {

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
        <Button text='texto' />
        <Button text='texto' variant='outline' icon={'plus'} />
      </TitleContainer>

    </Container>
  );
};

export default InitialPage;
