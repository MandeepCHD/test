/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Alert
} from 'react-native';


import { Intro } from './app/configs/router';

import {
  StackNavigator,
} from 'react-navigation';


export default class App extends Component<{}> {
   constructor(props) {
    super(props);
  }


  render() {

    return <Intro/>;

  }
}
 
