import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import All from './All';
import AfficheTonony from './AfficheTonony';

const Stack = createStackNavigator();

 function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="All" component={All}  options={{headerShown:false}}  />
      <Stack.Screen name="AfficheTonony" component={AfficheTonony} options={{headerShown:false }}/>
    </Stack.Navigator>
  );
}
export default MyStack;