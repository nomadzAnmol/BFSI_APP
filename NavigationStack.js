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
      {/* <Stack.Screen name="OnboardingStack" component={OnboardingStack} /> */}
      {/* After Onboarding, show AuthStack */}
      <Stack.Screen name="AuthStack" component={AuthStack} />
      {/* Finally, show BottomTabNavigator */}
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* Show HomeStack in the main navigator */}
      {/* <Stack.Screen name="HomeStack" component={HomeStack} /> */}
      
    </Stack.Navigator>
  );
};

export default NavigationStack;
