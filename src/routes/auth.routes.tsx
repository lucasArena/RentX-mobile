import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Introduction from '../pages/Introdution';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator>
    <Auth.Screen name="Introduction" component={Introduction} />
  </Auth.Navigator>
);

export default AuthRoutes;
