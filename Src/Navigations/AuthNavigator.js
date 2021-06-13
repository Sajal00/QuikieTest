import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/index';
import Registration from "../Screens/Registration/index";
import ForgotPassword from '../Screens/ForgotPassword/index';
import OtpVerification from "../Screens/OtpVerification/index";
import ResetPassword from "../Screens/ResetPassword";
const Stack = createStackNavigator();

export default class AuthNavigator extends Component {

    render() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="login" component={Login} initialRouteName="login" />
                <Stack.Screen name="registration" component={Registration} />
                <Stack.Screen name="forgotPassword" component={ForgotPassword} />
                <Stack.Screen name="otpVerification" component={OtpVerification} />
                <Stack.Screen name="resetPassword" component={ResetPassword} />
            </Stack.Navigator>
        );
    }
}
