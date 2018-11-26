/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Easing, Animated} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import About from './pages/App/About';
import Home from './pages/App/Home';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  }
}, {
  mode: "modal",
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{translateY}] };
    }
  })
});

const AppContainer = createAppContainer(AppNavigator);
class App extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}


export default App;
