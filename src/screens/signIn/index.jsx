// InitialPage.js
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';
import Title from '../../components/title';

const SignIn = () => {
 
  return (
    <Container>
      <Backnav variant='transparent'/>
      <Content>

      <Title text='Bem Vindo de Volta'/>
      </Content>
    </Container>
  );
};

export default SignIn;