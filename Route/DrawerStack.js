import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from "../Views/Home/HomePage";
import ProductList from "../Views/Product/ProductList";
import { NavigationContainer } from '@react-navigation/native'
import DrawerMenu from "../Views/Menu/DrawerMenu"
import RouteConstant from "../Utilities/Constants/RouteConstant";
import MyCart from "../Views/Cart/MyCart";
import MyAccount from "../Views/Account/MyAccount";
import StoreLocator from "../Views/Store/StoreLocator";
import MyOrders from "../Views/Orders/MyOrders";
import ProductDetailPage from "../Views/ProductDetail/ProductDetailPage";

const DrawerStack = () => 
{
    const Drawer = createDrawerNavigator ()
    return (
        <NavigationContainer>
        <Drawer.Navigator
        drawerContent = {props => <DrawerMenu {...props}/>}
        screenOptions = {
            {
                headerShown : true,
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
        }>
        <Drawer.Screen 
        name= {RouteConstant.Home}
        component={HomePage}
        />
        <Drawer.Screen 
        name= {RouteConstant.Product} 
        component={ProductList}
        />
        <Drawer.Screen 
        name= {RouteConstant.Cart} 
        component={MyCart}
        />
        <Drawer.Screen 
        name= {RouteConstant.Account} 
        component={MyAccount}
        />
        <Drawer.Screen 
        name= {RouteConstant.Store} 
        component={StoreLocator}
        />
        <Drawer.Screen 
        name= {RouteConstant.Order} 
        component={MyOrders}
        />
        <Drawer.Screen
        name = {RouteConstant.ProdDetails}
        component = {ProductDetailPage}
        />
        </Drawer.Navigator>
        </NavigationContainer>
        )
    }
    
    
    const ProdStack = (drawerNav) => {
        const ProductStack = createDrawerNavigator()
        return (
            <ProductStack.Navigator 
            initialRouteName={RouteConstant.Product}
            initialRouteKey = {RouteConstant.Product}
            >
            <ProductStack.Screen
            name = {RouteConstant.Product}
            component = {ProductList}
            />
            <ProductStack.Screen
            name = {RouteConstant.ProdDetails}
            component = {ProductDetailPage}
            />
            </ProductStack.Navigator>
            )
            
        }
        export default DrawerStack
        