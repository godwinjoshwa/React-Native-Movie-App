import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Details from "./screens/Details";


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor:'red',
      },
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
      }
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
      headerStyle: {
        backgroundColor:'red'
      },
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold'
      }
    }
  }
});

export default createAppContainer(AppNavigator);