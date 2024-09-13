// components/Auth/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './LogIn';
import SignUp from './SignUp'; // Adjust paths as needed
import ForgotPassword from './ForgotPassword';
import OtpVerification from './OtpVerification';
import ResetPassword from './ResetPassword';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
