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
  const isLogin = useSelector (state => state.loginReducer.isLogin)
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
        dispatch (PerformLogin ("a@e.in", "1234"))
      }
    }/>
    
    {/* <Text> {isLoading ? 'Loading...' : ''}</Text> */}
    {isLoading && <Text>Loading</Text>}
    {/* <Text>Hello world</Text> */}
    {/* <Text>  {isLogin ? 'Login success' : ''}</Text> */}
    </View>
    //<ProductList/>
    );
  }
  export default App;
  