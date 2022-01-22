import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';

import SplashScreen from '../Components/Splash';

var TabNav = createBottomTabNavigator();

export default class Nav extends React.Component{
    render(){
        return (
            <NavigationContainer>
                <TabNav.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Splash') {
                            iconName = focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline';
                          } else if (route.name === 'Splash 2') {
                            iconName = focused ? 'settings' : 'settings-outline';
                          }
              
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'turquoise',
                        tabBarInactiveTintColor: 'gray',
                      })}
                >
                    <TabNav.Screen name="Splash" component={SplashScreen} />
                    <TabNav.Screen name="Splash 2" component={SplashScreen} />
                </TabNav.Navigator>
            </NavigationContainer>
        )
    }
}