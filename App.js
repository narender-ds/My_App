import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from './Screens/SpalshScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';


const Stack=createStackNavigator();
const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            Component={Login}
          />
          <Stack.Screen
            name="Register"
            Component={Register}

          />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
