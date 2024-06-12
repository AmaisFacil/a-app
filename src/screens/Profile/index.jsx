import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import { Container, Content, Highlight, HighlightsContainer, HighlightText, ProfileInformations,  ProfileSection} from './styles';
import InformationButton from '../../components/informationButton';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import { logout } from '../../actions/user';
import Title from '../../components/title';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [status, setStatus] = useState('');
  const { reset } = useNavigation();

  const handleLogout = async () => {
    setStatus('loading');
    await logout();
    setStatus('');
    reset({
      index: 0, 
      routes: [{ name: 'InitialPage' }],
    })
  }

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
        <Button text='SAIR' icon='log-out' variant='error' margin='25px 0' onPress={handleLogout} loading={status=='loading'}/>
      </Content>
    </Container>
  );
};

export default Profile;
