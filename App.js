/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RouteStack from "./Route/RouteStack";
import DrawerStack from "./Route/DrawerStack";
import { useDispatch, useSelector } from 'react-redux';
import RouteViewModel from "./ViewModel/Route/RouteViewModel";
import LoaderPage from "./Views/SubViews/Loader/LoaderPage";
import { PerformForceLogin, ShowLoader } from "./Redux/Action/LoginAction";
const App = () => {
  const IsLogin = useSelector (state => state.loginReducer.IsUserLogin)
  const [IsLoader,SetIsLoader] = useState (null)
  const [IsLoginAsync, SetIsLoginAsync] = useState(false)
  const dispatch = useDispatch ()
  useEffect (() => 
  {
    SplashScreen.hide()
  })
  
  useEffect (()=> {
    SetIsLoader (false)
    SetIsLoginAsync (true)
    
  }, [IsLogin])
  
  useEffect (()=> {
    SetIsLoader (true)
    RouteViewModel.CheckLoginStatus ((status) => {
      // console.log ('CheckLoginStatus =', status)
      SetIsLoader (false)
      if (status) {
        dispatch (PerformForceLogin())
      }

      SetIsLoginAsync (true)

    })

  }, [])


  if (IsLoginAsync) {
    // console.log ('IsLoader if = ', IsLoader)
    return (
      IsLogin ? <DrawerStack/> : <RouteStack/> 
      //<DrawerStack/> 
  
      )
    } else {
      // console.log ('IsLoader else = ', IsLoader)
      return (
        <LoaderPage visible = {IsLoader}/>
      );
    }
    
  } 
  
  export default App;
  