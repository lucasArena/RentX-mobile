import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};

  padding: 24px;
`;

export const TitleContainer = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  width: 52%;

  font-family: 'Archivo-Medium';
  font-size: 30px;
  line-height: 34px;

  color: ${({ theme }) => theme.colors.white};
`;

export const SelectDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 46px;
`;

export const SelectDateArea = styled.View``;

export const SelectDateAreaTitle = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 10px;
  line-height: 11px;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled.Image``;

export const InputDate = styled.TextInput`
  width: 100px;

  font-family: 'Inter-Regular';
  font-size: 15px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.primaryTextLighter};
  opacity: 0.24;

  height: 9px;

  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.primaryTextLighter};
`;
