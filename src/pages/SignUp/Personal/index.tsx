import React, { useCallback, useRef } from 'react';
import { Keyboard, Platform, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FormHandles } from '@unform/core';
import { ButtonProps } from '../../../components/Button';

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
  NextStepButton,
} from './styles';

interface FormData {
  name: string;
  email: string;
}

const PersonalSignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const mailInputRef = useRef<TextInput>(null);
  const buttonNextStep = useRef<ButtonProps>(null);

  const { navigate } = useNavigation();

  const handleNextStep = useCallback(
    async (formData: FormData) => {
      try {
        formRef.current?.setErrors([]);
        const schema = Yup.object({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('E-mail inválido')
            .required('Nome e-mail obrigatório'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });
        navigate('PasswordSignUp', {
          email: formData.email,
          name: formData.name,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [navigate],
  );

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Header />

          <Form onSubmit={handleNextStep} ref={formRef}>
            <Top>
              <Title>Crie sua conta</Title>
              <Description>
                Faça seu cadastro de forma rápida e fácil.
              </Description>
            </Top>

            <Main>
              <Subject>
                <SujectText>01. Dados</SujectText>
              </Subject>

              <Input
                icon="user"
                name="name"
                autoCapitalize="words"
                returnKeyType="next"
                placeholder="Nome"
                onSubmitEditing={() => {
                  mailInputRef.current?.focus();
                }}
              />
              <Input
                icon="mail"
                name="email"
                keyboardType="email-address"
                returnKeyType="send"
                placeholder="Email"
                ref={mailInputRef}
              />

              <NextStepButton
                color="#DC1637"
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Próximo
              </NextStepButton>
              <View style={{ flex: 1 }} />
            </Main>
          </Form>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default PersonalSignUp;
