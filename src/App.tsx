import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

import lightTheme from './styles/themes/light';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <NavigationContainer>
      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <Routes />
      </View>
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
