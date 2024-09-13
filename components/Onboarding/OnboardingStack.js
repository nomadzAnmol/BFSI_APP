// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import FirstPage from './Firstpage'; // Make sure the paths are correct
// import SecondPage from './Secondpage';
// import ThirdPage from './Thirdpage';
// import FourthPage from './Fourthpage';
// import FifthPage from './Fifthpage';
// import LogIn from '../Auth/LogIn';
// const Stack = createStackNavigator();

// const OnboardingStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="FirstPage">
//         {(props) => <FirstPage {...props} onNextPress={() => props.navigation.navigate('SecondPage')} />}
//       </Stack.Screen>
//       <Stack.Screen name="SecondPage">
//         {(props) => <SecondPage {...props} onNextPress={() => props.navigation.navigate('ThirdPage')} />}
//       </Stack.Screen>
//       <Stack.Screen name="ThirdPage">
//         {(props) => <ThirdPage {...props} onNextPress={() => props.navigation.navigate('FourthPage')} />}
//       </Stack.Screen>
//       <Stack.Screen name="FourthPage">
//         {(props) => <FourthPage {...props} onNextPress={() => props.navigation.navigate('FifthPage')} />}
//       </Stack.Screen>
//       <Stack.Screen name="FifthPage">
//         {(props) => <FifthPage {...props} onNextPress={() => props.navigation.navigate('LogIn')} />}
//       </Stack.Screen>

//     </Stack.Navigator>
//   );
// };

// export default OnboardingStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './Firstpage'; // Ensure the paths are correct
import SecondPage from './Secondpage';
import ThirdPage from './Thirdpage';
import FourthPage from './Fourthpage';
import FifthPage from './Fifthpage';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstPage">
        {(props) => <FirstPage {...props} onNextPress={() => props.navigation.navigate('SecondPage')} />}
      </Stack.Screen>
      <Stack.Screen name="SecondPage">
        {(props) => <SecondPage {...props} onNextPress={() => props.navigation.navigate('ThirdPage')} />}
      </Stack.Screen>
      <Stack.Screen name="ThirdPage">
        {(props) => <ThirdPage {...props} onNextPress={() => props.navigation.navigate('FourthPage')} />}
      </Stack.Screen>
      <Stack.Screen name="FourthPage">
        {(props) => <FourthPage {...props} onNextPress={() => props.navigation.navigate('FifthPage')} />}
      </Stack.Screen>
      <Stack.Screen name="FifthPage">
        {(props) => <FifthPage {...props} onNextPress={() => props.navigation.navigate('AuthStack',{screen:'LogIn'})} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default OnboardingStack;
