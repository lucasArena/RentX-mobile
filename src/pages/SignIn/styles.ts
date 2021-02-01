import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.SafeAreaView`
  /* flex: 1; */
  justify-content: flex-end;
  /* flex-direction: column; */
`;

export const Top = styled.View``;

export const Title = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 40px;
  line-height: 44px;

  margin-top: 63px;

  max-width: 50%;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';

  font-size: 15px;
  line-height: 25px;

  max-width: 70%;
  margin-top: 24px;
`;

export const Main = styled.View`
  flex-direction: column;
  margin-top: 25%;
`;

export const Form = styled(UnformForm)`
  justify-content: flex-end;
  padding-bottom: 10%;
`;

export const SignInHelperArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 0;
`;

export const RememberSignInButton = styled(RectButton)``;

export const RememberSignInButtonText = styled.Text`
  font-family: 'Inter-Regular';
  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;
  line-height: 16px;
`;

export const ForgotPasswordButton = styled(RectButton)``;

export const ForgotPasswordButtonText = styled.Text`
  font-family: 'Inter-Regular';
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  line-height: 16px;
`;

export const SignInButton = styled(Button)`
  height: 10px;
`;
