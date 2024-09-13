// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import HomeStack from './NavigationStack';
// import Profile from './components/LowerNav/Profile';
// import Info from './components/LowerNav/Info';
// import Article from './components/LowerNav/Article';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
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
//     </NavigationContainer>
//   );
// }


// App.js
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import HomeStack from './NavigationStack';
// import Profile from './components/LowerNav/Profile';
// import Info from './components/LowerNav/Info';
// import Article from './components/LowerNav/Article';
// import BottomTabBar from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
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
//     </NavigationContainer>
//   );
// }


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './NavigationStack'; // Root navigation stack

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}




