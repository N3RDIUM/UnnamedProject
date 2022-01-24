import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs'
import React from 'react';

const Drawer = createDrawerNavigator();

export default class DrawerNav extends React.Component{
    render(){
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName = "home">
                    <Drawer.Screen name="home" component={Tabs}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
