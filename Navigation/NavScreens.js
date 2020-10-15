import React from 'react';
import { Text, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import GameScreen from '../Screens/GameScreen';

const Drawer = createDrawerNavigator();
const NavStack = createStackNavigator();

const Screens = () => {
    return (
        <NavStack.Navigator screenOptions={headerStyle}>
            <NavStack.Screen
                name='Home'
                component={Home}
                options={() => ({ title: 'Lottery Generator' })} />
            <NavStack.Screen
                name='Game'
                component={GameScreen}
                options={({ route }) => ({
                    title: route.params.name
                })} />
        </NavStack.Navigator>
    )
}

export default ScreenStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ gestureEnabled: false }} initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Screens} />
        </Drawer.Navigator>
    )
}

const headerStyle = {
    headerStyle: {
        backgroundColor: '#007B0E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: '200',
        fontSize: 25,
    },
    newIcon: {

        fontSize: 40,
        fontWeight: '200',
        color: 'white',
        marginRight: 20,
    }
};