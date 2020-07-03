import * as React from 'react';

import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Scan from './pages/Scan'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="Ranking" component={Ranking} />
      </Tab.Navigator>
    );
  }