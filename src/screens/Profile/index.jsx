import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect} from 'react';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';


import { Container, Content, ProfileInformations,  ProfileSection} from './styles';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Title from '../../components/title';
import Avatar from '../../components/avatar';

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

      </Content>
    </Container>
  );
};

export default Profile;
