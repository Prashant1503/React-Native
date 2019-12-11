/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './components/HelloWorld';
import {name as appName} from './app.json';
import message from './components/message';
import welcome from './components/welcome';

AppRegistry.registerComponent(appName, () => HelloWorld);
