import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/Login';

import UserPage from './src/UserPage';
import PubPage from './src/PubPage';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="UserPage" component={UserPage} />
        <AppStack.Screen name="PubPage" component={PubPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('main', () => App);