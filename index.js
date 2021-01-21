/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import ConfigureStore from "./Redux/Store/ReduxStore";

const RXStore = ConfigureStore()
const NeoStore = () =>
<Provider>
    <App/>
</Provider>


AppRegistry.registerComponent(appName, () => NeoStore);
