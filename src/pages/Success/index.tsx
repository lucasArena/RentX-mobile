import React from 'react';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  BackgroundImage,
  IconArea,
  IconContainer,
  Title,
  DescriptionContainer,
  Description,
  ButtonsContainer,
} from './styles';

interface SuccessParams {
  icon?: React.ComponentType;
  title: string;
  description: string;
  buttons: React.ComponentType;
}

const Success: React.FC = () => {
  const route = useRoute();
  const {
    icon: Icon,
    title,
    description,
    buttons: Buttons,
  } = route.params as SuccessParams;

  return (
    <Container>
      <BackgroundImage />
      {Icon && (
        <IconArea>
          <IconContainer>
            <Icon />
          </IconContainer>
        </IconArea>
      )}

      <Title>{title}</Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>

      {Buttons && (
        <ButtonsContainer>
          <Buttons />
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Success;
