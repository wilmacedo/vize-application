import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from '../pages/Home';

const pages = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    }
  }
);

export default createAppContainer(pages);