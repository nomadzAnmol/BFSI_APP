// components/Stacks/HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home';
import SearchScreen from '../search/SearchScreen';
import ProductPage from '../Product/ProductPage';
import ProductDetailPage from '../Product/ProductDetailPage';
import ProfileEditPage from '../LowerNav/ProfileEditPage';
import HelpPage from '../Help/HelpPage '; 
import SubCategory from '../Home/SubCategory'; 
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SubCategory" component={SubCategory} options={{ headerShown: false }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} options={{ headerShown: false }} />
      <Stack.Screen name="HelpPage" component={HelpPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
