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
const App = () => {
  useEffect (() => 
  {
    SplashScreen.hide()
  })
  return (
    <RouteStack>

    </RouteStack>
  )

  // return (
  //   <View style = 
  //   {
  //     {
  //       height : '100%',
  //       justifyContent : 'center',
  //       alignItems : 'center'
  //     }
  //   }>
  //   <Button 
  //   title = "Login" 
  //   style = 
  //   {
  //     {
        
  //     }
  //   }
  //   onPress = 
  //   {
  //     () => 
  //     {
  //       dispatch (PerformLogin ("vrushneo123@gmail.com", "123456"))
  //     }
  //   }/>
    
  //   {/* <Text> {isLoading ? 'Loading...' : ''}</Text> */}
  //   {isLoading && <Text>Loading</Text>}
  //   { UserData != null && <Text style = {{padding : 30}}> {JSON.stringify(UserData)} </Text>}
  //   {/* <Text>Hello world</Text> */}
  //   {/* <Text>  {isLogin ? 'Login success' : ''}</Text> */}
  //   </View>
  //   //<ProductList/>
  //   );
  }
  export default App;
  