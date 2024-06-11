import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';

import { Container } from './styles';
import Title from '../../components/title';

const Home = () => {
 const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Home Page</Title>
    </Container>
  );
};

export default Home;
