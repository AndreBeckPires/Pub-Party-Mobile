import * as React from 'react';

import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Scan from './pages/Scan';
import Bares from './pages/Bares';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'



const Tab = createMaterialBottomTabNavigator();
Icon.loadFont();

export default function UserPage() {
  return (
    <Tab.Navigator
      activeColor="#FFAC2C"
      inactiveColor="#D3CEC4"
      barStyle={{ backgroundColor: '#1F2933' }}>

      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="beer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Scan"
        component={Scan}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Ranking"
        component={Ranking}
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color }) => (
            <Icon name="insert-chart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}