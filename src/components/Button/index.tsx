import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

export interface ButtonProps extends RectButtonProperties {
  color: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  ...rest
}: ButtonProps) => (
  <Container color={color} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
