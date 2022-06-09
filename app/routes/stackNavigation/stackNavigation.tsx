
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel, SignInViveModel,SignUpViewModel,ForgetPasswordViewModel } from '../../viewModel';
import { Screens } from '../../config';



const Stack = createNativeStackNavigator();

const StackRoute = ()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.FORGET_PASSWORD} screenOptions={{headerShown:false}}>
          <Stack.Screen name={Screens.HOME} component={HomeViewModel} />
          <Stack.Screen name={Screens.SIGN_IN} component={SignInViveModel} />
          <Stack.Screen name={Screens.SIGN_UP} component={SignUpViewModel} />
          <Stack.Screen name={Screens.FORGET_PASSWORD} component={ForgetPasswordViewModel} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackRoute;