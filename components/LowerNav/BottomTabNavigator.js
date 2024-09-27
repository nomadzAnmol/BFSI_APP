import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeStack from '../Stacks/HomeStack'; 
import Profile from './Profile'; 
import Info from './Info'; 
import Article from './Article'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Info') {
            iconName = 'info-circle';
          } else if (route.name === 'Article') {
            iconName = 'file-text';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#9BC4FF',
        tabBarInactiveTintColor: '#98A3B3',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} /> 
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
