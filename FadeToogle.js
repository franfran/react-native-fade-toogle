'use strict';

import React, { Component, PropTypes } from 'react'
import { StyleSheet, Components, Animated, Text, View, Image } from 'react-native'

var FadeToogle = React.createClass({
    propTypes: {
        fromOpacity: PropTypes.number,
        toOpacity: PropTypes.number,
        duration: PropTypes.number,
        component: PropTypes.string,
        easing: PropTypes.func,
        callback: PropTypes.func,
        isDisabled: PropTypes.bool,
        style: View.propTypes.style,
    },
    getDefaultProps() {
        return {
            fromOpacity: 1,
            toOpacity: 0,
            duration: 100,
            isDisabled: false,
        };
    },
    getInitialState() {
        return {
            opacity: this.props.fromOpacity,
            fadeAnim: new Animated.Value(this.props.fromOpacity),
        };
    },
    fadeToggle() {
        var that = this;
        var callback = function() {
          if (that.props.callback && !that.props.isDisabled) {
            that.props.callback();
          }
        };

        var t;
        if(this.state.opacity == this.props.toOpacity){
            t = this.props.fromOpacity;
        }else{
            t = this.props.toOpacity;
        }
        this.setState({opacity: t});
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: t,
                duration: this.props.duration,
                easing: this.props.easing
            },
        ).start(callback);
    },
    render(){
        var com = Animated[ this.props.component ]
        var child = eval(this.props.children);
        return React.createElement(com, {style: [this.props.style, {opacity: this.state.fadeAnim}]}, child);
    }
});

module.exports = FadeToogle;
