import React from 'react';
import {Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Slide from '../../components/Slide';

import {
  Container,
  WelcomeToApp,
  LogoContainer,
  Logo,
  WelcomeContainer,
  Title,
  Description,
  Actions,
  SignInButton,
  SignUpButton,
  GoBackActions,
  GoBackButton,
  GoBackButtonText,
} from './styles';

import logo from '../../assets/logo.png';

const dimensions = Dimensions.get('window');

const Introduction: React.FC = () => {
  return (
    <Container>
      <ScrollView
        horizontal
        snapToInterval={dimensions.width}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast">
        <Slide
          pageNumber="01"
          title="Primeiro, escolha a data"
          description="Você é quem define um período,
          e nós mostraremos os carros disponíveis."
        />
        <Slide
          pageNumber="02"
          title="Depois, escolha o carro"
          description="Vários modelos para você
          dirigir seguro, com conforto
          e segurança."
        />

        <WelcomeToApp>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>

          <WelcomeContainer>
            <Title>Seja Bem-vindo</Title>
            <Description>O que você deseja fazer?</Description>
          </WelcomeContainer>

          <Actions>
            <SignInButton color="#DC1637">Login</SignInButton>
            <SignUpButton color="#29292E">Cadastro</SignUpButton>
          </Actions>
          <GoBackActions>
            <GoBackButton>
              <GoBackButtonText>Voltar</GoBackButtonText>
            </GoBackButton>
          </GoBackActions>
        </WelcomeToApp>
      </ScrollView>
    </Container>
  );
};

export default Introduction;
