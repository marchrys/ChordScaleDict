import React, { Component } from "react";
import { render } from "react-dom";
import { View, StyleSheet, Text, Picker } from "react-native";
import { concat } from "react-native-reanimated";

import styles from "../styles/styles";

import chords from "../data/chords";
import notes from "../data/notes";

class About extends Component {
 
  state = {
    selTonic: notes[0],
    selChord: chords[0],
    chordNotesString: '',
    fontColor: 'black'
  }

  updateChord = (chordId) => {
    
    this.createChordString(chordId, this.state.selTonic.id);
    this.setState({ 
      selChord: chords.find((chord) => chord.id == chordId),
    });
     
  }

  updateTonic = (tonicId) => {
    this.createChordString(this.state.selChord.id, tonicId);
    this.setState({
      selTonic: notes.find( (note) => note.id == tonicId)
    });
  }

  createChordString = (chordId, tonicId) => {
    const selChord = chords.find( (chord) => chord.id == chordId);
    const selTonic = notes.find( (note) => note.id == tonicId);

    let chordNotesIds = [];
    chordNotesIds.push(selTonic.id);
    selChord.intervals.forEach((interval) => {
      chordNotesIds.push(chordNotesIds[0] + interval);
    });

    let chordNotes = [];
    chordNotesIds.forEach((noteId) => {
      chordNotes.push(notes.find((note) => note.id == noteId));
    });

    let chordNotesString = '';
    let fontColor;
    chordNotes.forEach((note) => {
      if(note !== undefined){
        chordNotesString += ' ' + note.name.fr ;
        fontColor = 'green';
      }
      else{
        chordNotesString = 'Cet accord utilise des doubles altérations';
        fontColor = 'red';
        return;
      }
    });

    this.setState({
      chordNotesString: chordNotesString,
      fontColor: fontColor
    });
  }

  render() {
    let text = {
      color: this.state.fontColor
    }

    return (
      <View style={styles.centeredScreen}>
        <View style={styles.pickerView}>
          <Text style={styles.staticText}>Type d'accord</Text>
          <Picker selectedValue = {this.state.selChord.id} onValueChange = {this.updateChord}>
            {chords.map((item) => <Picker.Item label={item.type} value={item.id} key={item.id}/>)}
          </Picker>
        </View>
        <View style={styles.pickerView}>
          <Text style={styles.staticText}>Fondamentale</Text>
          <Picker selectedValue = {this.state.selTonic.id} onValueChange = {this.updateTonic}>
            {notes.map((item) => <Picker.Item label={item.name.fr} value={item.id} key={item.id} />)}
          </Picker>
        </View>
        <Text style = { text }>{this.state.chordNotesString}</Text>
      </View>
    );
  }
};

export default About;


