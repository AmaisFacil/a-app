import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { Container, Content, FormContainer, ErrorText } from './styles';
import useKeyboardStatus from '../../hooks/useKeybordStatus';
import TextButton from '../../components/textButton';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import { signUp } from '../../actions/user';
import useRegex from '../../hooks/useRegex';
import Title from '../../components/title';
import Input from '../../components/input';

const SignUp = () => {
  const [password, setPassword ] = useState("");
  const [status, setStatus] = useState('');
  const [email, setEmail ] = useState("");
  const [error, setError] = useState('');
  const [name, setName ] = useState("");

  const isKeyboardActive = useKeyboardStatus();
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const regex = useRegex();
 
  const handleSignIn = async () => {
    setStatus('loading');
    if (email.length  <= 0 || password.length  <= 0 || name.length  <= 0){
      setError("complete todos os campos");
      return setStatus('error');
    }
    if (regex.email(email)){
      setError("email inválido");
      return setStatus('error');
    }
    const response = await signUp(dispatch, { email, password, name });
    if (response.error) {
      setError(response.error);
      return setStatus('error');
    }
    setStatus('');
    navigate.reset({
      index: 0, 
      routes: [{ name: 'Home' }],
    })

  };

  return (
    <Container>
      <Backnav variant='transparent'/>
      <Content>
        {
          isKeyboardActive ? null : <Title text='Seja Bem Vindo'/>
        }
        <FormContainer>
          <Input
            onChangeText={(x) => setName(x)}
            placeholder='nome completo'
            margin={'10px 0'}
            status={status}
            value={email}
            icon='type'
            width={80}
            />
          <Input
            onChangeText={(x) => setEmail(x)}
            placeholder='email@email.com'
            margin={'10px 0'}
            status={status}
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
            status={status}
            icon='unlock'
            width={80}
          />
          {
            error ? <ErrorText>{error}</ErrorText> : null
          }
        </FormContainer>
        <Button text='CADASTRAR' onPress={handleSignIn} width={70} variant='outline' loading={status=='loading'}/>
        {
          isKeyboardActive ? null : <TextButton text='Já tem uma conta? Entre' margin='10px 0' onPress={() => navigate.navigate('SignIn')}/>
        }
      </Content>
    </Container>
  );
};

export default SignUp;