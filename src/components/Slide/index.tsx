import React from 'react';

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
  icon: React.ComponentType;
  pageNumber: string;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({
  icon: Icon,
  pageNumber,
  title,
  description,
}: SlideProps) => {
  return (
    <Container>
      <Content>
        <Pagination>
          <Icon />
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
