import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black};
`;

export const BackgroundImage = styled.View`
  height: 40%;
  width: 100%;
`;

export const IconArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.View`
  border: 10px solid #29292e;
  padding: 14px 14px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 30px;
  line-height: 33px;
  text-align: center;

  color: ${({ theme }) => theme.colors.buttonText};

  margin-top: 15%;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  color: ${({ theme }) => theme.colors.textDetails};

  margin-top: 5%;
  max-width: 43%;
`;

export const ButtonsContainer = styled.View`
  align-items: center;

  margin-top: 15%;
`;
