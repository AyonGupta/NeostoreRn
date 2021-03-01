import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from "../Views/Login/LoginPage";
import RegisterPage from "../Views/Register/RegisterPage";
const RouteStack = () => 
{
    const Stack = createStackNavigator()
        return (
            <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Login"
            screenOptions = {
                {
                    headerShown : false,
                    headerStyle : 
                    {
                        backgroundColor : 'red'
                    },
                    headerTintColor : '#fff',
                    headerTitleStyle :
                    {
                        fontSize : 25, 
                        fontWeight : 'bold'
                    }
                }
            }
            >
            <Stack.Screen
            name = "Login"
            component = {LoginPage}
            >
            </Stack.Screen>
            <Stack.Screen
            name = "Register"
            component = {RegisterPage}
            options = 
            {
                {
                    headerShown : true,
                }
            }
            >
            </Stack.Screen>
            </Stack.Navigator>
            </NavigationContainer>
            )
        }
        
        export default RouteStack
        