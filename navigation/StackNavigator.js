import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ChordDict from '../screens/ChordDict';
import ScaleDict from '../screens/ScaleDict';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Dictionnaire d\'accords et de gammes' }}/>
      <Stack.Screen name="ChordDict" component={ChordDict} options={{ title: 'Dictionnaire d\'accords' }}/>
      <Stack.Screen name="ScaleDict" component={ScaleDict} options={{ title: 'Dictionnaire de gammes' }}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };