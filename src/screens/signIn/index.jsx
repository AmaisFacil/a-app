import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { Container, Content, FormContainer } from './styles';
import useKeyboardStatus from '../../hooks/useKeybordStatus';
import TextButton from '../../components/textButton';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Title from '../../components/title';
import Input from '../../components/input';

import { signIn } from '../../actions/user';

const SignIn = () => {
  const [password, setPassword ] = useState("12345678");
  const [email, setEmail ] = useState("admin@gmail.com");

  const isKeyboardActive = useKeyboardStatus();
  const navigate = useNavigation();
  const dispatch = useDispatch();
 
  const handleSignIn = async () => {
    const response = await signIn(dispatch, { email, password });
    console.log(response);
  };

  return (
    <Container>
      <Backnav variant='transparent'/>
      <Content>
        {
          isKeyboardActive ? null : <Title text='Bem Vindo de Volta'/>
        }
        <FormContainer>
          <Input
            onChangeText={(x) => setEmail(x)}
            placeholder='email@email.com'
            margin={'10px 0'}
            value={email}
            icon='user'
            width={80}
            />
          <Input
            onChangeText={(x) => setPassword(x)}
            placeholder='******'
            variant='password'
            margin={'10px 0'}
            value={password}
            icon='unlock'
            width={80}
          />
        </FormContainer>
        <Button text='ENTRAR' onPress={handleSignIn} width={70}/>
        {
          isKeyboardActive ? null : <TextButton text='Não tem uma conta? Cadastre-se' margin='10px 0' onPress={() => navigate('SignUp')}/>
        }
      </Content>
    </Container>
  );
};

export default SignIn;