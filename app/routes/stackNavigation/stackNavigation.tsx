
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel, SignInViveModel,SignUpViewModel } from '../../viewModel';
import { Screens } from '../../config';


const Stack = createNativeStackNavigator();

function StackRoute() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.SIGN_UP} screenOptions={{headerShown:false}}>
          <Stack.Screen name={Screens.HOME} component={HomeViewModel} />
          <Stack.Screen name={Screens.SIGN_IN} component={SignInViveModel} />
          <Stack.Screen name={Screens.SIGN_UP} component={SignUpViewModel} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackRoute;