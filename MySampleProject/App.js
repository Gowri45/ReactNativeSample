import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import UserDetailsScreen from './app/screens/UserDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
            options={{headerShown: false}}
          /> 
        <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="User Details" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
