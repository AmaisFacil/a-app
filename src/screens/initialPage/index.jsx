// InitialPage.js
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import image from '../../../assets/imgs/initial-login.png'
import { Container, Image, TitleContainer, Title, Description } from './styles';

const InitialPage = () => {

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
      </TitleContainer>
    </Container>
  );
};

export default InitialPage;
