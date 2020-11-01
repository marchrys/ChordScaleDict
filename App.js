import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./navigation/StackNavigator";

class App extends Component {
  render(){
    
    return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );

  }
}

export default App;
