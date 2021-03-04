/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RouteStack from "./Route/RouteStack";
import RouteViewModel from "./ViewModel/Route/RouteViewModel";
import DrawerStack from "./Route/DrawerStack";
import { useSelector } from 'react-redux';
const App = () => {
  
  const IsLogin = useSelector (state => state.loginReducer.IsUserLogin)
  useEffect (() => 
  {
    SplashScreen.hide()
    
  })

  return (
    IsLogin ? <DrawerStack/> : RouteViewModel.CheckLoginStatus () ?  <DrawerStack/> : <RouteStack/>
    )
  }
  export default App;
  