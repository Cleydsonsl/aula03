import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps{
  type: 'up' | 'down';
  isActive: boolean;
  title: string;
};

export function TransactionButton({ title, isActive, type, ...rest }: Props){
  return(
    <Container {...rest} type={type} isActive={isActive}>
      <Icon 
        name={icons[type]}
        type={type}
      />
      <Title>{title}</Title>
    </Container>
  )
}