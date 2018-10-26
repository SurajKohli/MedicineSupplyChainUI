import React, {Component} from 'react';
import {Platform} from 'react-native';
import LoginScreen from './screens/loginScreen';
import ScanScreen from './screens/scanScreen';
import AdminScreen from './screens/adminScreen';
import ResultScreen from './screens/resultScreen';
import {StackNavigator} from 'react-navigation';
import './ReactotronConfig';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Admin: {
    screen: AdminScreen
  },
  Scan: {
    screen: ScanScreen
  },
  Result: {
    screen: ResultScreen
  }
});

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
