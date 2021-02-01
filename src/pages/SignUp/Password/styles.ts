import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.white};
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

export const Content = styled.SafeAreaView`
  justify-content: flex-end;
  padding-bottom: 5%;
`;

export const Form = styled(UnformForm)``;

export const Main = styled.View`
  margin-top: 25%;
`;

export const Subject = styled.View`
  margin-bottom: 24px;
`;

export const SujectText = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 20px;
  line-height: 22px;
`;

export const SignUpButton = styled(Button)`
  margin-top: 10%;
  height: 56px;
`;

export const SuccessButton = styled(Button)`
  font-size: 15px;
  max-width: 25%;
`;
