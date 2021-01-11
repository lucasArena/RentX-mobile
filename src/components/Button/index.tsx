import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  color: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({children, color}: ButtonProps) => {
  return (
    <Container color={color}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
