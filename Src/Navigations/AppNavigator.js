import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashNavigator from './SplashNavigator';
import AuthNavigator from './AuthNavigator';
import FeedNavigator from './FeedNavigator';


const Stack = createStackNavigator();

export default class AppNavigator extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="splash" component={SplashNavigator} initialRouteName="splash"/>
                <Stack.Screen name="auth" component={AuthNavigator} />
                <Stack.Screen name="home" component={FeedNavigator} />
              </Stack.Navigator>
        )
    }
}
