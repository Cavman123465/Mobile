import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native';
import {
    FormInput,
} from 'react-native-elements';


export default class ForgotPassword extends Component {
    render() {

        const { container } = styles;
  
        return (
            <ImageBackground
              style={container}
              source={require('./images/download.jpeg')} >
      
              
            </ImageBackground>
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
  });