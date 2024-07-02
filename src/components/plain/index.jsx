import { Linking } from 'react-native';
import React from 'react';


import { Container, ValueContainer, ValueText } from './styles';
import Description from '../description';
import Button from '../button';
import Title from '../title';

const Plain = ({ plain }) => {
    
  const { name, description, monthlyPrice, credits } = plain;

  const handleCheckout = () => {
    const url = 'https://agenciamaisfacil.com.br/#planos';
    Linking.openURL(url)
  };

  return (
  <Container>
      <Title text={name}/>
      <Description text={description} align='center'/>
      <ValueContainer>
        <Title text='R$' size={15}/>
        <ValueText>{monthlyPrice + '.00'}</ValueText>
        <Title text='/mês' size={15}/>
      </ValueContainer>
      <Description text={`*${credits} créditos por mês`}/>
      <Description text={`*Backups Semanais de informações`}/>
      <Description text={`*Criação de Webprove ou Certificado A+`}/>
      <Description text={`*Proteção pelo órgão nacional ITI`}/>
      <Button text='COMPRAR' onPress={handleCheckout} margin={'25px 0'}/>
  </Container>
  )
}

export default Plain