import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container onPress={() => handleNavigate()}>
      <Icon name="chevron-left" size={24} color="#AEAEB3" />
    </Container>
  );
};

export default Header;
