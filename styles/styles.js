import React from "react";
import { StyleSheet } from "react-native";

import colors from './colors';

const styles = StyleSheet.create({
  centeredScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },

  buttonView: {
      width: '60%',
      marginBottom: 30
  },

  buttonStyle: {
    backgroundColor: 'gray',
    color: 'red'
  },

  pickerView: {
    marginLeft: '30%',
    marginRight: '30%',
    width: '60%'
  },

  staticText: {
    margin: 20
  }
});

export default styles;