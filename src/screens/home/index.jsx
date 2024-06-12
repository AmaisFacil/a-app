import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';

import { Container, Content, Navbar } from './styles';
import Avatar from '../../components/avatar';
import Button from '../../components/button';

const Home = () => {
 const { navigate } = useNavigation();

  return (
    <Container>
      <Navbar>
        <Button icon='plus' text='CRIAR' loading={false} width={40} height={6}/>
        <Avatar 
          name="John Doe" 
        />
      </Navbar>
      <Content>

      </Content>
    </Container>
  );
};

export default Home;
