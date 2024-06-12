import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import { Container, Content } from './styles';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Title from '../../components/title';
import Input from '../../components/input';
import Button from '../../components/button';

const ProfileEdit = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  const user = useSelector((state) => state.user);
  const { navigate } = useNavigation();

  const handleUpdate = async () => {
    setStatus('loading');
  }

  return (
    <Container>
      <Backnav text='Editar Perfil'/>
      <Content>
          <Input
              onChangeText={(x) => setValue(x)}
              placeholder=""
              value={value}
              icon='edit-2'
              width={90}
          />
          <Button
            loading={status=='loading'}
            onPress={handleUpdate}
            margin='25px 0 0 0'
            variant='outline'
            text='atualizar'
            icon='save'
            width={75}
          />
      </Content>
    </Container>
  );
};

export default ProfileEdit;
