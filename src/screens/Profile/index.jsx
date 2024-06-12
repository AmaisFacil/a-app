import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';


import { Container, Content, Highlight, HighlightsContainer, HighlightText, ProfileInformations,  ProfileSection} from './styles';
import InformationButton from '../../components/informationButton';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Avatar from '../../components/avatar';
import Title from '../../components/title';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const { navigate } = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Backnav text='Perfil'/>
      <Content>
        <ProfileInformations>
          <Avatar name={user?.name || ""} size={20} variant='outline'/>
          <ProfileSection>
           <Title  text={user?.name || ""} size={22}/>
           <Description  text={user?.email || ""}/>
          </ProfileSection>
        </ProfileInformations>
        <HighlightsContainer>
            <Highlight>
              <Description text='Creditos'/>
              <HighlightText>0</HighlightText>
            </Highlight>
            <Highlight>
              <Description text='Certificados'/>
              <HighlightText>0</HighlightText>
            </Highlight>
            <Highlight>
              <Description text='Webproves'/>
              <HighlightText>0</HighlightText>
            </Highlight>
            <Highlight>
              <Description text='Gravações'/>
              <HighlightText>0</HighlightText>
            </Highlight>

        </HighlightsContainer>
        <InformationButton title='Sobre Mim' description={user?.about ? user.about : 'Sobre mim não cadastrado'} onPress={() => navigate("ProfileEdit", { type: 'about', text: 'Sobre mim'})}/>
        <InformationButton title='Nome completo' description={user?.name ? user.name : 'Nome não cadastrado'} onPress={() => navigate("ProfileEdit", { type: 'name', text: 'Nome'})}/>
        <InformationButton title='CPF' description={user?.cpf ? user.cpf : 'CPF não cadastrado'} onPress={() => navigate("ProfileEdit", { type: 'cpf', text: 'CPF'})}/>
        <InformationButton title='Historico' onPress={() => navigate('Historic')}/>
      </Content>
    </Container>
  );
};

export default Profile;
