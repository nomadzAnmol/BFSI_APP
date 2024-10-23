// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack'; 
// import OnboardingStack from './components/Onboarding/OnboardingStack'; 
// // import HomeStack from './components/Stacks/HomeStack'; // Import HomeStack

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* First, show OnboardingStack */}
//       <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

//       {/* After Onboarding, show AuthStack */}
//       <Stack.Screen name="AuthStack" component={AuthStack} />

//       {/* Finally, show BottomTabNavigator */}
//       <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />


      
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;

// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack';
// import OnboardingStack from './components/Onboarding/OnboardingStack';

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real authentication logic

//   // Fetch the onboarding and login status from AsyncStorage
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         // Check if the user has completed onboarding
//         const onboardingStatus = await AsyncStorage.getItem('hasCompletedOnboarding');
//         setHasCompletedOnboarding(onboardingStatus === 'true');
        
//         // Check if the user is logged in (you might want to check a token or some auth status)
//         const userToken = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(!!userToken); // True if the token exists
//       } catch (error) {
//         console.error('Error fetching status:', error);
//       }
//     };

//     fetchStatus();
//   }, []);

//   // Render nothing until onboarding and login status are fetched
//   if (hasCompletedOnboarding === null) {
//     return null; // You can return a splash screen or a loading screen here
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {hasCompletedOnboarding ? (
//         // If onboarding is complete, show the AuthStack or BottomTabNavigator
//         isLoggedIn ? (
//           <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//         ) : (
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         )
//       ) : (
//         // If onboarding is not complete, show the OnboardingStack
//         <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;



// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack';
// import OnboardingStack from './components/Onboarding/OnboardingStack';

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(null);  // null initially, to check if the login status is fetched

//   // Fetch the onboarding and login status from AsyncStorage
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         // Check if the user has completed onboarding
//         const onboardingStatus = await AsyncStorage.getItem('hasCompletedOnboarding');
//         setHasCompletedOnboarding(onboardingStatus === 'true');
        
//         // Check if the user is logged in (you might want to check a token or some auth status)
//         const userToken = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(!!userToken);  // True if the token exists, meaning the user is logged in
//       } catch (error) {
//         console.error('Error fetching status:', error);
//       }
//     };

//     fetchStatus();
//   }, []);

//   // Render nothing until onboarding and login status are fetched
//   if (hasCompletedOnboarding === null || isLoggedIn === null) {
//     return null; // You can return a splash screen or a loading screen here
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* If onboarding is not complete, show the OnboardingStack */}
//       {!hasCompletedOnboarding ? (
//         <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
//       ) : (
//         // If onboarding is complete, show AuthStack or Home based on login status
//         isLoggedIn ? (
//           <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//         ) : (
//           <Stack.Screen name="AuthStack" component={AuthStack} />
//         )
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;


// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
// import AuthStack from './components/Auth/AuthStack';
// import OnboardingStack from './components/Onboarding/OnboardingStack';

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//   const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const onboardingStatus = await AsyncStorage.getItem('hasCompletedOnboarding');
//         setHasCompletedOnboarding(onboardingStatus === 'true');

//         const userToken = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(!!userToken);
//       } catch (error) {
//         console.error('Error fetching status:', error);
//       }
//     };

//     fetchStatus();
//   }, []);

//   // Render nothing until onboarding and login status are fetched
//   if (hasCompletedOnboarding === null) {
//     return null; // You can return a splash screen or a loading screen here
//   }

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {hasCompletedOnboarding ? (
//         isLoggedIn ? (
//           // If onboarding is complete and logged in, show BottomTabNavigator
//           <Stack.Screen name="Main" component={BottomTabNavigator} />
//         ) : (
//           // If onboarding is complete but not logged in, show AuthStack
//           <Stack.Screen name="Auth" component={AuthStack} />
//         )
//       ) : (
//         // If onboarding is not complete, show OnboardingStack
//         <Stack.Screen name="Onboarding" component={OnboardingStack} />
//       )}
//     </Stack.Navigator>
//   );
// };

// export default NavigationStack;


// import necessary libraries and components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './components/LowerNav/BottomTabNavigator';
import AuthStack from './components/Auth/AuthStack';
import OnboardingStack from './components/Onboarding/OnboardingStack';

const Stack = createStackNavigator();

const NavigationStack = ({ initialRoute }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute} // Use initialRoute prop
        screenOptions={{ headerShown: false }}
      >
        {/* Onboarding Stack - displayed first when the app is launched */}
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />

        {/* Auth Stack - used for login, signup, etc. */}
        <Stack.Screen name="AuthStack" component={AuthStack} />

        {/* Main Stack - contains the BottomTabNavigator and other main screens */}
        <Stack.Screen name="MainStack" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
