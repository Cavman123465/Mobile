import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Switch,
  
} from 'react-native';
import {
  FormInput,
  Icon,
  Button
} from 'react-native-elements';


export default class Register extends Component {
  render() {

    const {
      container,
      signinStyle,
      cardStyle,
      inputStyle,
      cardSection,
      policySection,
      policyStyle,
      switchStyle,
      registerBtnStyle
    } = styles;

    return (
      <ImageBackground
        style={container}
        source={require('./images/download.jpeg')} >

        <Text style={signinStyle}>
          Sign up
          </Text>

        <View style={cardStyle}>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Name" onChangeText={this.passwordValueChanged}
              secureTextEntry={true} autoCorrect={false} placeholderTextColor="#fff"/>
            <Icon name='ios-american-football' type='ionicon' />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="E-mail" onChangeText={this.passwordValueChanged}
              secureTextEntry={true} autoCorrect={false} placeholderTextColor="#fff" />
            <Icon name='ios-american-football' type='ionicon' />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Password" onChangeText={this.passwordValueChanged}
              secureTextEntry={true} autoCorrect={false} placeholderTextColor="#fff" />
            <Icon name='ios-american-football' type='ionicon' />
          </View>

          <View style={policySection}>
              <Text style={policyStyle}>Terms of use & Privacy Policy</Text>
              <Switch style={switchStyle}/>
          </View>

          <Button
            style={registerBtnStyle}
            title="SIGN UP"
            onPress={this.loginBtnDidPressed}
            backgroundColor='orange'
            borderRadius={30}
          />

        </View >

        


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
  signinStyle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 65,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  cardStyle: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ffffff70',
    borderRadius: 10,
    flexWrap: 'wrap'
  },
  inputStyle: {
    width: '80%',
    height: '100%',
    marginLeft: 20,
    fontStyle: 'italic'
  },
  cardSection: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  policySection: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  policyStyle: {
    fontSize: 12,
    color: 'white',
    fontStyle: 'italic',
    margin: 10,
    flex: 6,
  },
  switchStyle: {
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
    margin: 10,
    flex: 1
  },
  registerBtnStyle: {
    marginTop: 50,
    marginLeft:30,
    marginRight:30,
    marginBottom: -15
  }

});