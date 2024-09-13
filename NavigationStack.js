
// // NavigationStack.js
// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Import stacks
// import HomeStack from './components/Stacks/HomeStack'; // Your main app screens
// import AuthStack from './components/Auth/AuthStack'; // Authentication screens
// import OnboardingStack from './components/Onboarding/OnboardingStack'; // Onboarding screens

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkOnboardingStatus = async () => {
//       const onboardingComplete = await AsyncStorage.getItem('onboardingComplete');
//       setIsOnboardingComplete(onboardingComplete === 'true');
//     };

//     const checkLoginStatus = async () => {
//       const loggedIn = await AsyncStorage.getItem('isLoggedIn');
//       setIsLoggedIn(loggedIn === 'true');
//     };

//     checkOnboardingStatus();
//     checkLoginStatus();
//   }, []);

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isOnboardingComplete ? (
//         <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
//       ) : !isLoggedIn ? (
//         <Stack.Screen name="AuthStack" component={AuthStack} />
//       ) : (
//         <Stack.Screen name="HomeStack" component={HomeStack} />
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;

// NavigationStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import stacks
import HomeStack from './components/Stacks/HomeStack'; // Your main app screens
import AuthStack from './components/Auth/AuthStack'; // Authentication screens
import OnboardingStack from './components/Onboarding/OnboardingStack'; // Onboarding screens

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* First, show OnboardingStack */}
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      {/* After Onboarding, show AuthStack */}
      <Stack.Screen name="AuthStack" component={AuthStack} />
      {/* Finally, show HomeStack */}
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
