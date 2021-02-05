import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChooseDate from '../pages/ChooseDate';

const App = createBottomTabNavigator();

const Autheticated: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name="ChooseDate" component={ChooseDate} />
    </App.Navigator>
  );
};

export default Autheticated;
