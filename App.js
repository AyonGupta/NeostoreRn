/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ProductList from "./Views/ProductList";
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App = () => {
  useEffect (() => 
  {
    SplashScreen.hide()
  })
  return (
    <ProductList/>
  );
}
export default App;
