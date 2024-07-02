import React from 'react';

import { Container } from './styles';
import Title from '../title';
import Description from '../description';

const Plain = ({ title, description }) => {
    
  return (
  <Container>
      <Title text={title}/>
      <Description text={description}/>

  </Container>
  )
}

export default Plain