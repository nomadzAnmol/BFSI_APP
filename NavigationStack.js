import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
import AuthStack from './components/Auth/AuthStack'; 
import OnboardingStack from './components/Onboarding/OnboardingStack'; 
// import HomeStack from './components/Stacks/HomeStack'; // Import HomeStack

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* First, show OnboardingStack */}
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

      {/* After Onboarding, show AuthStack */}
      <Stack.Screen name="AuthStack" component={AuthStack} />

      {/* Finally, show BottomTabNavigator */}
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />


      
    </Stack.Navigator>
  );
};

export default NavigationStack;


// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View  ,Text } from 'react-native-web';
// import AsyncStorage from '@react-native-async-storage/async-storage'; 
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack'; 
// import OnboardingStack from './components/Onboarding/OnboardingStack'; 

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const token = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(!!token); // Set login status based on token existence
//       } catch (error) {
//         console.error("Error checking login status:", error);
//       } finally {
//         setLoading(false); // Finish loading state
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Loading...</Text>  {/* Correct usage of <Text> */}
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!isLoggedIn ? (
//         // If not logged in, show Onboarding and Auth stacks
//         <>
//           <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         </>
//       ) : (
//         // If logged in, show the main app content (BottomTabNavigator)
//         <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;


// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack';
// import OnboardingStack from './components/Onboarding/OnboardingStack';

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAppStatus = async () => {
//       try {
//         // Check if user has completed onboarding
//         const onboardingStatus = await AsyncStorage.getItem('hasCompletedOnboarding');
//         setHasCompletedOnboarding(!!onboardingStatus); // Set onboarding status

//         // Check if user is logged in
//         const token = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(!!token); // Set login status based on token existence
//       } catch (error) {
//         console.error('Error checking app status:', error);
//       } finally {
//         setLoading(false); // Finish loading state
//       }
//     };

//     checkAppStatus();
//   }, []);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* If onboarding is not completed, show OnboardingStack */}
//       {!hasCompletedOnboarding ? (
//         <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
//       ) : (
//         // If onboarding is completed and user is not logged in, show AuthStack (Login)
//         !isLoggedIn ? (
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         ) : (
//           // If user is logged in, show the main app content (BottomTabNavigator)
//           <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//         )
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;
