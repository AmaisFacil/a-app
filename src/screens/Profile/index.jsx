import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect} from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';


import { Container, Content, Highlight, HighlightsContainer, HighlightText, ProfileInformations,  ProfileSection} from './styles';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Title from '../../components/title';
import Avatar from '../../components/avatar';
import InformationButton from '../../components/informationButton';

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
        <InformationButton title='Sobre Mim' description={user?.about ? user.about : 'Sobre mim não cadastrado'} onPress={() => navigate("ProfileEdit")}/>
        <InformationButton title='Nome completo' description={user?.name ? user.name : 'Name não cadastrado'} onPress={() => navigate()}/>
        <InformationButton title='CPF' description={user?.cpf ? user.cpf : 'CPF não cadastrado'} onPress={() => navigate()}/>
        <InformationButton title='Historico' onPress={() => navigate()}/>
      </Content>
    </Container>
  );
};

export default Profile;
