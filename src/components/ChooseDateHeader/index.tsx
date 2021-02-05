import React from 'react';

import arrowRight from '../../assets/icons/arrow-right.png';

import {
  Container,
  TitleContainer,
  Title,
  SelectDateContainer,
  SelectDateArea,
  SelectDateAreaTitle,
  Icon,
  InputDate,
} from './styles';

const ChooseDateHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Escolha a data e encontre um carro.</Title>
      </TitleContainer>

      <SelectDateContainer>
        <SelectDateArea>
          <SelectDateAreaTitle>De</SelectDateAreaTitle>
          <InputDate />
        </SelectDateArea>

        <Icon source={arrowRight} />

        <SelectDateArea>
          <SelectDateAreaTitle>Para</SelectDateAreaTitle>
          <InputDate />
        </SelectDateArea>
      </SelectDateContainer>
    </Container>
  );
};

export default ChooseDateHeader;
