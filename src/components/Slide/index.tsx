import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Pagination,
  Details,
  PageNumber,
  Content,
  Title,
  Description,
} from './styles';

interface SlideProps {
  pageNumber: string;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({
  pageNumber,
  title,
  description,
}: SlideProps) => {
  return (
    <Container>
      <Content>
        <Pagination>
          <Icon name="ios-car-outline" size={96} color="#DC1637" />
          <PageNumber>{pageNumber}</PageNumber>
        </Pagination>

        <Details>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Details>
      </Content>
    </Container>
  );
};

export default Slide;
