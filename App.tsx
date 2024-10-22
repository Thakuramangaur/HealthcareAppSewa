import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Home from './src/Components/Home';
import SignUpScreen from './src/Components/SignUp';
import LoginDetailsScreen from './src/Components/LoginDetails';

enableScreens(true);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LoginDetails" component={LoginDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
