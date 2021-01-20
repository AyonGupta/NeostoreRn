/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import  configureStore  from "./Store/Store";



const Store = configureStore()

const Redux = () => 
    <Provider store = {Store}>
        <App/>
    </Provider>


AppRegistry.registerComponent(appName, () => Redux);
