import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import React, { useState } from 'react';

import { Container, InputContainer } from './styles';

const Input = (props) => {
  const [textView, setTextView] = useState(!(variant == 'password'));
  const [focus, setFocus] = useState(false);
  const theme = useTheme();

  const { variant, icon,  width, height, margin, value, status } = props;

  const getIconColor = () => {
    switch (status) {
      case 'error':
        return 'red';
      case 'alert':
        return 'red';
      default:
        return theme.colors.secondaryText;
    }
  };

  const ActionIcon = () => {
    switch(variant){
      case'noicon':
        return null;
      case'password':
        return <Feather color={getIconColor()} size={30} name={textView ? 'eye' : 'eye-off'} onPress={() => setTextView(!textView)}/>
      default:
        return   value?.length == 0 ? null : <Feather color={getIconColor()} size={30} name='x-octagon' onPress={() => props?.onChangeText ? props.onChangeText("") : null}/> 
    }
  }
  return (
    <Container variant={variant} width={width} height={height} margin={margin} status={status}>
      {
        icon ? <Feather color={getIconColor()} size={30} name={icon}/> : null
      }
      <InputContainer
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
         secureTextEntry={variant=='password' && textView}
         {...props}
      />
      <ActionIcon/>
    </Container>
  );
}

export default Input;
