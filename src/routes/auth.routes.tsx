import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '../pages/Introdution';
import SignIn from '../pages/SignIn';
import PersonalSignUp from '../pages/SignUp/Personal';
import PasswordSignUp from '../pages/SignUp/Password';

import Success from '../pages/Success';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Introduction" component={Introduction} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="PersonalSignUp" component={PersonalSignUp} />
    <Auth.Screen name="PasswordSignUp" component={PasswordSignUp} />

    <Auth.Screen name="Success" component={Success} />
  </Auth.Navigator>
);

export default AuthRoutes;
