import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface ContainerProp {
  color: string;
}

export const Container = styled(RectButton)<ContainerProp>`
  align-items: center;
  justify-content: center;

  background: ${({ color }) => color};
  padding: 28px;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Regular';

  color: ${({ theme }) => theme.colors.buttonText};
`;
