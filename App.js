
// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NavigationStack from './NavigationStack'; // Your main navigation stack

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [initialRoute, setInitialRoute] = useState('OnboardingStack');

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       const token = await AsyncStorage.getItem('userToken');
//       const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');

//       console.log('Token:', token);  // Log token
//       console.log('Onboarding Flag:', hasCompletedOnboarding);  // Log onboarding flag

//       if (token) {
//         // User is logged in
//         setInitialRoute('MainStack');
//       } else if (hasCompletedOnboarding === 'true') {
//         // User has completed onboarding but is not logged in
//         setInitialRoute('AuthStack');
//       }

//       setIsLoading(false);
//     };

//     checkAuthStatus();
//   }, []);

//   if (isLoading) {
//     return <ActivityIndicator size="large" color="#0000ff" />; // Loading indicator
//   }

//   // Pass the computed initialRoute to NavigationStack
//   return <NavigationStack initialRoute={initialRoute} />;
// };

// export default App;

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import NavigationStack from './NavigationStack'; // Your main navigation stack

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('OnboardingStack');

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');

        console.log('Token:', token);  // Log token
        console.log('Onboarding Flag:', hasCompletedOnboarding);  // Log onboarding flag

        if (token) {
          setInitialRoute('MainStack'); // User is logged in
        } else if (hasCompletedOnboarding === 'true') {
          setInitialRoute('AuthStack'); // User has completed onboarding but is not logged in
        }

        // Simulate a 1-second delay before hiding the splash screen
        setTimeout(() => {
          setIsLoading(false);  // Done loading, change state
          SplashScreen.hideAsync();  // Hide the splash screen
        }, 1000); // 1 second delay
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoading(false);  // Fail safe in case of an error
        SplashScreen.hideAsync();  // Ensure splash screen is hidden even in case of an error
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return null; // Keep splash screen visible while loading
  }

  // Render your navigation stack once loading is complete
  return <NavigationStack initialRoute={initialRoute} />;
};

export default App;
