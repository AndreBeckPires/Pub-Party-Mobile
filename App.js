import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/Login';

import BottomTab from './src/BottomTab';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="UserPage" component={BottomTab} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('main', () => App);