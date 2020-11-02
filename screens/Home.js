import React, { Component } from "react";
import { View, Button } from "react-native";

import styles from '../styles/styles';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <View style={styles.centeredScreen}>
        <View style={styles.buttonView}>
          <Button
            title="Dictionnaire d'accords"
            onPress={() => this.props.navigation.navigate("ChordDict")} // We added an onPress event which would navigate to the About screen
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Dictionnaire de gammes"
            onPress={() => this.props.navigation.navigate("ScaleDict")} // We added an onPress event which would navigate to the About screen
          />
        </View>
      </View>
    );

  }
}

export default Home;