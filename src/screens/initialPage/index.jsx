import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';

import { Container, Image, TitleContainer } from './styles';
import image from '../../../assets/imgs/initial-login.png';
import Button from '../../components/button';

const InitialPage = () => {
 const { navigate } = useNavigation();

  return (
    <Container>
      <Image source={image}></Image>
      <TitleContainer>
        <Button text='entrar'  margin='5px 0' onPress={() => navigate('SignIn')}/>
        <Button text='cadastrar' margin='5px 0' onPress={() => navigate('SignUp')} variant='outline'/>
      </TitleContainer>
    </Container>
  );
};

export default InitialPage;
