import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  // Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput

} from 'react-native';
import {
  SocialIcon,
  Button
} from 'react-native-elements';
import  { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions';

export class Login extends Component {
  emailValueChanged(text) {
    this.props.emailChanged(text);
  }

  passwordValueChanged(text) {
    this.props.passwordChanged(text);
  }

  loginBtnDidPressed() {
    const {email, password } = this.props;
    this.props.loginUser({email, password});
  }

  forgotPasswordDidPressed() {
    Actions.ForgotPasswordScreen();
  }

  // componentWillMount() {
  //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  // }

  // componentWillUnmount() {
  //   this.keyboardDidShowListener.remove();
  //   this.keyboardDidHideListener.remove();
  // }

  // _keyboardDidShow() {
  //   // alert('Keyboard Shown');
  //   console.log('Keyboard Shown')
  // }

  // _keyboardDidHide() {
  //   // alert('Keyboard Hidden');
  //   console.log('Keyboard Hidden')
  // }

  render() {

    const {
      container,
      signinStyle,
      inputBackgroundStyle,
      inputStyle,
      inputContainerStyle,
      orStyle,
      socialLoginContainer,
      loginBtnStyle,
    } = styles;

    return (
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground
          style={container}
          source={require('./images/download.jpeg')} >

          <Text style={signinStyle}>
            Sign in
          </Text>

          <View style={inputContainerStyle} >

            <View style={inputBackgroundStyle}>
              <TextInput style={inputStyle} placeholder="Email" onChangeText={this.emailValueChanged.bind(this)}
                autoCorrect={false} value={this.props.email}/>
            </View>

            <View style={inputBackgroundStyle}>
              <TextInput style={inputStyle} placeholder="Password" onChangeText={this.passwordValueChanged.bind(this)}
                secureTextEntry={true} autoCorrect={false} value={this.props.password}/>
            </View>


            <Text style={orStyle} >
              OR
                </Text>

            <View style={socialLoginContainer}>
              <SocialIcon
                title='SIGN IN WITH FACEBOOK'
                button
                type='facebook'
              />
              <SocialIcon
                title='SIGN IN WITH GOOGLE'
                button
                type='google-plus-official'
              />
            </View>

            <Button
              backgroundColor='transparent'
              color='white'
              title='Forgot your password?'
              onPress={this.forgotPasswordDidPressed}
              fontSize={12} />
          </View>

          <Button
            style={loginBtnStyle}
            icon={{ name: 'keyboard-arrow-right' }}
            onPress={this.loginBtnDidPressed.bind(this)}
            backgroundColor='orange'
          />
        </ImageBackground>
      </ScrollView>
      // </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})( Login );

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
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputBackgroundStyle: {
    backgroundColor: '#f4f4f4',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    borderRadius: 30,
  },
  inputStyle: {
    height: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  orStyle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white'
  },
  socialLoginContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
  loginBtnStyle: {
    marginLeft: -20,
    marginRight: -20,
  }
});