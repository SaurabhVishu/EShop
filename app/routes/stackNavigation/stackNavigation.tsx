
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeViewModel } from '../../viewModel';


const Stack = createNativeStackNavigator();

function StackRoute() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeViewModel}
         options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackRoute;