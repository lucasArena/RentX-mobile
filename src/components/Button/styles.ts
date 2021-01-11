import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

interface ContainerProp {
  color: string;
}

export const Container = styled(RectButton)<ContainerProp>`
  flex: 1;
  align-items: center;

  background: ${({color}) => color};
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: #e1e1e6;
`;
