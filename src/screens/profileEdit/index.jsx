import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { Container, Content } from './styles';
import Description from '../../components/description';
import Backnav from '../../components/backnav';
import Title from '../../components/title';
import Input from '../../components/input';
import Button from '../../components/button';
import { updateProfile } from '../../actions/user';

const ProfileEdit = ({route}) => {

  const user = useSelector((state) => state.user);
  const { type, text } = route.params;
  
  const [value, setValue] = useState(user[type] || "");
  const [status, setStatus] = useState("");

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    setStatus('loading');
    if (value.length  <= 0) return setStatus('error');
    await updateProfile(dispatch, {id: user._id, data: { [type]: value}});
    setStatus('');
    return navigate("Profile");
  }
 

  return (
    <Container>
      <Backnav text='Editar Perfil'/>
      <Content>
          <Input
              onChangeText={(x) => setValue(x)}
              placeholder={text}
              status={status}
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
