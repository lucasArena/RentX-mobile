import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Button from '../../components/Button';

const dimensions = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Slide = styled.View`
  width: ${dimensions.width}px;
`;

export const WelcomeToApp = styled.View`
  width: ${dimensions.width}px;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 100px 24px 0;

  background: #1b1b1f;
`;

export const LogoContainer = styled.View``;

export const Logo = styled.Image``;

export const WelcomeContainer = styled.View`
  margin-top: 40%;

  height: 45%;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Medium';

  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  max-width: 200px;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';

  font-size: 15px;
  text-align: center;

  margin-top: 16px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SignInButton = styled(Button)`
  width: 50%;
`;

export const SignUpButton = styled(Button)`
  margin-left: 16px;
  width: 50%;
`;

export const GoBackActions = styled.View`
  align-items: center;
  flex: 1;
`;

export const GoBackButton = styled(RectButton)`
  font-family: 'Archivo-Medium';

  font-size: 13px;
  line-height: 14px;
  text-align: center;

  margin-top: 44px;
`;

export const GoBackButtonText = styled.Text`
  font-family: 'Arhivo-Regular';

  font-size: 13px;
  line-height: 14px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`;
