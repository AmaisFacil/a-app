// InitialPage.js
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Backnav from '../../components/backnav';
import { Container, Content } from './styles';

const SignIn = () => {
 
  return (
    <Container>
      <Backnav text='VOLTAR' variant='transparent'/>
      <Content>

      <Text>sign in</Text>
      </Content>
    </Container>
  );
};

export default SignIn;