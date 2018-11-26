import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
class Button extends Component {
    render() {
      return (
        <TouchableOpacity>
            <Text>{this.props.btnText}</Text>
        </TouchableOpacity>
      );
    }
  }

export default Button;