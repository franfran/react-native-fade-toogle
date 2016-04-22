# react-native-fade-toogle
Simple fade in out for React Native, with callback and easing options

[![npm version](http://img.shields.io/npm/v/react-native-fade-toogle.svg?style=flat-square)](https://npmjs.org/package/react-native-fade-toogle "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-fade-toogle.svg?style=flat-square)](https://npmjs.org/package/react-native-fade-toogle "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-fade-toogle.svg?style=flat-square)](https://npmjs.org/package/react-native-fade-toogle "View this project on npm")

![Demo](https://github.com/franfran/react-native-fade-toogle/wiki/images/screenshot.gif)

## Install

Install the package:

```bash
$ npm i react-native-fade-toogle --save
```

## Usage

```javascript

var FadeToogle = require('react-native-fade-toogle');
var {
    StyleSheet,
    Text,
    View,
    Easing,
} = React;

var fadedemo = React.createClass({
    _startButtonPressed(event) {
        var r = this.refs.fade;
        r.fadeToggle();
    },
    _fadeToogleCallback(){
        var r = this.refs.fade;
        console.log('fade: '+r.state.opacity);
    },
    render: function() {
        return (
            <View style={styles.container}>
                <FadeToogle ref="fade" component="View" easing={Easing.elastic(2)} callback={this._fadeToogleCallback}>
                    <Text>Hello</Text>
                </FadeToogle>
                <Button style={styles.button} onPress={this._startButtonPressed}>Fade</Button>
            </View>
        );
    }
});
```

## Props

Prop                  | Type     | Optional | Default                   | Description
--------------------- | -------- | -------- | ------------------------- | -----------
fromOpacity    | Number    | Yes      |                           | Init opacity value
toOpacity    | Number    | Yes      |                           | Fade to opacity value
duration    | Number    | Yes      |                           | Fade effect duration value
component    | Number    | No      |                           | Animatable components, View, Text, Image
easing    | Function    | No      |                    | The fade effect
callback    | Function    | Yes      |                    | Callback function after toggle
isDisabled | Boolean    | Yes      | false              | Enable or disable `callback` property function call
style      | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                 

## License

MIT.
