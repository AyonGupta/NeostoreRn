import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from "../Views/Home/HomePage";
import ProductList from "../Views/Product/ProductList";
import { NavigationContainer } from '@react-navigation/native'
import DrawerMenu from "../Views/Menu/DrawerMenu";
const DrawerStack = () => 
{
    const Drawer = createDrawerNavigator ()
    return (
        <NavigationContainer>
        <Drawer.Navigator
        drawerContent = {props => <DrawerMenu {...props}/>}>
        <Drawer.Screen 
        name="Home" 
        component={HomePage}
        />
        <Drawer.Screen 
        name='ProductList' 
        component={ProductList}
        />
        </Drawer.Navigator>
        </NavigationContainer>
        )
    }
    export default DrawerStack
    