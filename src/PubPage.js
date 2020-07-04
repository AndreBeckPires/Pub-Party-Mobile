import * as React from 'react';

import PubHome from './pages/PubHome';
import PubRanking from './pages/PubRanking';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createMaterialBottomTabNavigator();
Icon.loadFont();

export default function PubPage() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "black" }}>
            <Tab.Screen name="PubHome"
                component={PubHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="beer" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="PubRanking"
                component={PubRanking}
                options={{
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}