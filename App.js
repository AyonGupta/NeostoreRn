/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { PerformLogin } from "./Actions/LoginAction";
const App = () => {

  const dispatch = useDispatch()
  // const LoginUser = () => dispatch (PerformLogin("ag@wwindia.com", "123456"))
  const IsLogin = useSelector (state => state.loginReducer.isLogin) != null ? useSelector (state => state.loginReducer.isLogin) : false

  const OnPressButton = () => {
    dispatch (PerformLogin("ag@wwindia.com", "123456"))
  }

  useEffect (()=>{
    if (IsLogin) {
      alert("LOGIN Successful")
    }
    console.log("IsLogin = ", IsLogin)
  }, [IsLogin])

  return (
    <View style = {{height : '100%', justifyContent : 'center', backgroundColor : 'white'}}>
      <Button title = "Login" 
      style = {{magin : 50, height : 50}}
      onPress = {OnPressButton}>
      </Button>
      <Text style = {{justifyContent : 'center'}}> Login state = {String(IsLogin)}</Text>
    </View>
  );
}



export default App;
