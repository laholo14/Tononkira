import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Messe from './Messe';
import AfficheTononyMesse from './AfficheTononyMesse';

const Stack = createStackNavigator();

 function MyStackMesse() {
  return (
    <Stack.Navigator 
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Messe" component={Messe}  options={{headerShown:false}}  />
      <Stack.Screen name="AfficheTononyMesse" component={AfficheTononyMesse} options={{headerShown:false }}/>
    </Stack.Navigator>
  );
}
export default MyStackMesse;