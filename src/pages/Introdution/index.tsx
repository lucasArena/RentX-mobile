import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
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
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScrollView
        horizontal
        snapToInterval={dimensions.width}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        <Slide
          icon={() => <IconFeather name="calendar" size={96} color="#DC1637" />}
          pageNumber="01"
          title="Primeiro, escolha a data"
          description="Você é quem define um período,
          e nós mostraremos os carros disponíveis."
        />
        <Slide
          icon={() => (
            <IconIonicons name="car-outline" size={96} color="#DC1637" />
          )}
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
            <SignInButton color="#DC1637" onPress={() => navigate('SignIn')}>
              Login
            </SignInButton>
            <SignUpButton
              color="#29292E"
              onPress={() => navigate('PersonalSignUp')}
            >
              Cadastro
            </SignUpButton>
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
