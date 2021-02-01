import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const dimensions = Dimensions.get('window');

export const Container = styled.View`
  width: ${dimensions.width}px;
  height: 100%;

  padding: 40px;

  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  justify-content: center;

  margin-top: 15%;
`;

export const Pagination = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PageNumber = styled.Text`
  font-size: 62px;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const Details = styled.View`
  margin-top: 60px;
  max-width: 60%;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Medium';

  font-size: 40px;
  line-height: 42px;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';

  font-size: 15px;
  line-height: 25px;

  margin-top: 24px;

  color: ${({ theme }) => theme.colors.text};
`;
