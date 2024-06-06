import React, { useState } from 'react';

import { Container, Content, FormContainer } from './styles';
import Backnav from '../../components/backnav';
import Button from '../../components/button';
import Title from '../../components/title';
import Input from '../../components/input';

const SignIn = () => {
  const [password, setPassword ] = useState("");
  const [email, setEmail ] = useState("");
 
  const handleSignIn = async () => {

  };

  return (
    <Container>
      <Backnav variant='transparent'/>
      <Content>
        <Title text='Bem Vindo de Volta'/>
        <FormContainer>
          <Input
            onChangeText={(x) => setEmail(x)}
            placeholder='email@email.com'
            margin={'10px 0'}
            value={email}
            icon='user'
            />
          <Input
            onChangeText={(x) => setPassword(x)}
            placeholder='******'
            variant='password'
            margin={'10px 0'}
            value={password}
            icon='unlock'
          />
        </FormContainer>
        <Button text='ENTRAR' onPress={handleSignIn} width={70}/>
      </Content>
    </Container>
  );
};

export default SignIn;