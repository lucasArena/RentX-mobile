import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Keyboard, Platform, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import FA from 'react-native-vector-icons/FontAwesome';

import Header from '../../../components/Header';
import Input from '../../../components/Input';

import {
  Container,
  Form,
  Top,
  Title,
  Description,
  Content,
  Main,
  Subject,
  SujectText,
  SignUpButton,
  SuccessButton,
} from './styles';

interface FormData {
  password: string;
  confirmPassword: string;
}

const PasswordSignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const mailInputRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();

  const handleSignUp = useCallback(
    async (data: FormData) => {
      try {
        const { password, confirmPassword } = data;

        const schema = Yup.object({
          password: Yup.string().required('Senha obrigatória'),
          confirmPassword: Yup.string().required(
            'Confirmação da senha obrigatória',
          ),
        });

        await schema.validate(
          {
            password,
            confirmPassword,
          },
          {
            abortEarly: false,
          },
        );

        navigate('Success', {
          icon: () => <FA name="check" color="#03B352" size={36} />,
          title: 'Conta criada!',
          description: 'Agora é só fazer login e aproveitar.',
          buttons: () => (
            <>
              <SuccessButton color="#29292E" onPress={() => navigate('SignIn')}>
                Ok
              </SuccessButton>
            </>
          ),
        });
      } catch (error) {
        console.error(error);
      }
    },
    [navigate],
  );

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Header />

          <Form onSubmit={handleSignUp} ref={formRef}>
            <Top>
              <Title>Crie sua conta</Title>
              <Description>
                Faça seu cadastro de forma rápida e fácil.
              </Description>
            </Top>

            <Main>
              <Subject>
                <SujectText>02. Senha</SujectText>
              </Subject>

              <Input
                secureTextEntry
                name="password"
                icon="lock"
                returnKeyType="next"
                placeholder="Senha"
                onSubmitEditing={() => {
                  mailInputRef.current?.focus();
                }}
              />
              <Input
                secureTextEntry
                name="confirmPassword"
                icon="lock"
                returnKeyType="send"
                placeholder="Repetir senha"
                ref={mailInputRef}
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <SignUpButton
                color="#DC1637"
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </SignUpButton>
              <View style={{ flex: 1 }} />
            </Main>
          </Form>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default PasswordSignUp;
