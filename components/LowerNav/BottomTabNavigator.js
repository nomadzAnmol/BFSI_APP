// // BottomTabNavigator.js
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
// import HomeStack from '../../NavigationStack'; // Adjust the path to your HomeStack
// import Profile from '../LowerNav/Profile'; // Adjust the path to Profile
// import Info from '../LowerNav/Info'; // Adjust the path to Info
// import Article from '../LowerNav/Article'; // Adjust the path to Article

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Profile') {
//               iconName = 'user';
//             } else if (route.name === 'Info') {
//               iconName = 'info-circle';
//             } else if (route.name === 'Article') {
//               iconName = 'file-text';
//             }

//             return <FontAwesome name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#9BC4FF',
//           tabBarInactiveTintColor: '#98A3B3',
//           headerShown: false,  // Hide the header for all screens
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Info" component={Info} />
//         <Tab.Screen name="Article" component={Article} />
//       </Tab.Navigator>
//       <StatusBar style="auto" />
//     </>
//   );
// };

// export default BottomTabNavigator;
// components/LowerNav/BottomTabNavigator.js


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import HomeStack from '../Stacks/HomeStack'; // Import HomeStack here
import Profile from './Profile'; // Adjust path
import Info from './Info'; // Adjust path
import Article from './Article'; // Adjust path

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
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
      <StatusBar style="auto" />
    </>
  );
};

export default BottomTabNavigator;
