import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Welcome from './welcome';
import Navigator from './navigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

 function StackWelcome() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false }} />
      <Stack.Screen name="Navigator" component={Navigator} options={{headerShown:false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackWelcome;