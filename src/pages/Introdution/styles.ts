import {Dimensions} from 'react-native';
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

  align-items: center;
  justify-content: space-between;

  padding: 24px;
`;

export const LogoContainer = styled.View``;

export const Logo = styled.Image``;

export const WelcomeContainer = styled.View``;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: white;
`;

export const Description = styled.Text`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  color: #dedee3;
`;

export const Actions = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SignInButton = styled(Button)``;

export const SignUpButton = styled(Button)`
  margin-left: 16px;
`;

export const GoBackActions = styled.View`
  align-items: center;

  flex: 1;
`;

export const GoBackButton = styled.View`
  font-family: Archivo;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  text-align: center;

  color: #7a7a80;
`;

export const GoBackButtonText = styled.Text``;
