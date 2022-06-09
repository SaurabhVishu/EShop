
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel,ForgetPasswordViewModel } from '../../viewModel';


const Stack = createNativeStackNavigator();

function StackRoute() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ForgetPassword'  
        screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeViewModel} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordViewModel} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackRoute;