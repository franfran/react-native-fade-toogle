/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Easing,
  TouchableHighlight
} from 'react-native';
import FadeToogle from 'react-native-fade-toogle';

export default class fadetoogle extends Component {
  ft = null;//refs
  
  startButtonPressed(event) {
    ft.fadeToggle();
  }

  fadeToogleCallback(){
    console.log('fade: '+ft.state.opacity);
  }

  render() {
    return (
      <View style={styles.container}>
        <FadeToogle ref={(i) => {ft = i}} component="Text" easing={Easing.elastic(2)} callback={this.fadeToogleCallback}>
          <Text>Hello</Text>
        </FadeToogle>
        
        <TouchableHighlight style={styles.submit} onPress={this.startButtonPressed} underlayColor='#fff'>
          <Text style={styles.submitText}>Fade</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  submit:{
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff',
    width: 100
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  }
});

AppRegistry.registerComponent('fadetoogle', () => fadetoogle);
