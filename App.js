import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './screens/home/ProfileScreen';
import AccountScreen from './screens/home/AccountScreen';
import SettingsScreen from './screens/home/SettingsScreen';
import FeedScreen from './screens/home/FeedScreen';
import ExploreScreen from './screens/home/ExploreScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import InfoScreen from './screens/profile/InfoScreen';
import ImageScreen from './screens/profile/ImageScreen';
import DocScreen from './screens/profile/DocScreen';
import TravelScreen from './screens/profile/TravelScreen';
import LanguageScreen from './screens/profile/LanguageScreen';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="home" 
              color="blue" 
              size={20} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen} 
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="wpexplorer" 
              color="blue" 
              size={20} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="user" 
              color="blue" 
              size={20} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon 
              name="universal-access"
              color="blue" 
              size={20} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Documentation" component={DocScreen} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
