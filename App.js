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
const App = () => {
  useEffect (() => 
  {
    SplashScreen.hide()
  })
  return (
    RouteViewModel.CheckLoginStatus () ? <RouteStack/> : <DrawerStack/>
    )
  }
  export default App;
  