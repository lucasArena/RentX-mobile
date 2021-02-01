import React, { useCallback, useRef } from 'react';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from 'react-native';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';

import {
  Container,
  Content,
  Top,
  Title,
  Description,
  Main,
  Form,
  SignInHelperArea,
  RememberSignInButton,
  RememberSignInButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  SignInButton,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(() => {
    passwordInputRef.current?.focus();
  }, []);
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Content>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Header />
            <Top>
              <Title>Estamos quase lá</Title>
              <Description>
                Faça seu login para começar uma experiência incrível.
              </Description>
            </Top>
            <Main>
              <Input
                icon="mail"
                name="email"
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                secureTextEntry
                icon="lock"
                name="password"
                placeholder="Senha"
                ref={passwordInputRef}
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <SignInHelperArea>
                <RememberSignInButton>
                  <RememberSignInButtonText>
                    Lembrar-me
                  </RememberSignInButtonText>
                </RememberSignInButton>

                <ForgotPasswordButton>
                  <ForgotPasswordButtonText>
                    Esqueci minha senha
                  </ForgotPasswordButtonText>
                </ForgotPasswordButton>
              </SignInHelperArea>
              <SignInButton
                color="#DC1637"
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Login
              </SignInButton>
            </Main>
            <View style={{ flex: 1 }} />
          </Form>
        </TouchableWithoutFeedback>
      </Content>
    </Container>
  );
};

export default SignIn;
