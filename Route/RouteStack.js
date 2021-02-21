import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from "../Views/Login/LoginPage";
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
                headerTintColor : '#fff'
            }
        }
        >
            <Stack.Screen
            name = "Login"
            component = {LoginPage}
            >

            </Stack.Screen>
        
        </Stack.Navigator>
        </NavigationContainer>
        )
        
    }
    
    export default RouteStack
    