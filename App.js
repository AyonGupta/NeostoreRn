/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useEffect} from 'react';
import ProductList from "./Views/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { PerformLogin } from "./Redux/Action/LoginAction";
import SplashScreen from 'react-native-splash-screen';

import 
{ 
  View ,
  Button,
  Text
} from "react-native";

const App = () => {
  const dispatch = useDispatch ()
  const UserData = useSelector (state => state.loginReducer.UserData)
  const isLoading = useSelector (state => state.loginReducer.isLoader)
  
  
  useEffect (() => 
  {
    SplashScreen.hide()
  })
  
  return (
    <View style = 
    {
      {
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center'
      }
    }>
    <Button 
    title = "Login" 
    style = 
    {
      {
        
      }
    }
    onPress = 
    {
      () => 
      {
        dispatch (PerformLogin ("vrushneo123@gmail.com", "123456"))
      }
    }/>
    
    {/* <Text> {isLoading ? 'Loading...' : ''}</Text> */}
    {isLoading && <Text>Loading</Text>}
    { UserData != null && <Text style = {{padding : 30}}> {JSON.stringify(UserData)} </Text>}
    {/* <Text>Hello world</Text> */}
    {/* <Text>  {isLogin ? 'Login success' : ''}</Text> */}
    </View>
    //<ProductList/>
    );
  }
  export default App;
  