import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import Stack from './MyStack';
import MyStackMesse from './MyStackMesse';

const Tab = createMaterialBottomTabNavigator();

function Navigator() {
    return (
        
            <Tab.Navigator
               
                initialRouteName="Stack"
                activeColor="#e3dd87"
                inactiveColor="#737373"
                scrollEnabled={true}
                barStyle={{ backgroundColor: '#9f0f31'}}>

                <Tab.Screen 
                style={styles.all}
                name="Stack" 
                component={Stack} 
                options={{ 
                    tabBarLabel:'Izy rehetra',
                    tabBarIcon: ({ color }) => (
                     <MaterialCommunityIcons name="star" color={color} size={20}/>
                     ),
                    
                }}
                
                    />

                <Tab.Screen 
                name="mystackmesse" 
                component={MyStackMesse}
                options={{ 
                    tabBarLabel:'Messe',
                    tabBarIcon: ({ color }) => (
                     <MaterialCommunityIcons name="church" color={color} size={20}/>
                     ),
                }}
                />
            </Tab.Navigator>
       

    );
    
}

const styles = StyleSheet.create({
    all:{
     fontSize: 2,
    },
  });


export default Navigator;


  