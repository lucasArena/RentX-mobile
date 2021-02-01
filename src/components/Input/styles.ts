import styled from 'styled-components/native';

import IconFeather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;

  height: 56px;
  background: ${({ theme }) => theme.colors.inputBackground};

  margin: 6px 0;
`;

export const Icon = styled(IconFeather)`
  padding: 17px;
`;

export const TextInput = styled.TextInput`
  border-left-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.white};

  flex: 1;

  padding: 20px;
`;
