import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text
} from 'react-native';
import {
    SocialIcon,
    Button
} from 'react-native-elements';
import Router from './Router';
import  { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {
    createAccount() {
        Actions.RegisterScreen();
    }

    loginAccount() {
        Actions.LoginScreen();
    }


    render() {
        const {
          logolStyle,
            container,
            createAccountBtn,
            powerByStyle,
            powerCompanyFont,
            imageStyle
        } = styles;


        return (
            <ImageBackground
                style={container}
                source={require('./images/download.jpeg')} >

                <View style={logolStyle}>
                    <Image
                        style={imageStyle}
                        source={require('./images/caveman.jpg')}
                    />
                </View>

                <View style={createAccountBtn}>
                    <Button

                        rightIcon={{ name: 'keyboard-arrow-right' }}
                        title='CREATE ACCOUNT'
                        borderRadius={20}
                        onPress={this.createAccount} />

                    <Button
                        backgroundColor='transparent'
                        fontSize={12}
                        title='Already have an account? Sign in now'
                        onPress={this.loginAccount} />

                </View>

                <Text style={powerByStyle}>
                    Powered by
                    <Text style={powerCompanyFont}> CAVMAN DIGITAL SOLUTION</Text>
                </Text>

            </ImageBackground >

        );

    }
}

const styles = StyleSheet.create({
    logolStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    imageStyle: {
        height: 200,
        width: 200,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    createAccountBtn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 100
    },
    powerByStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#ffffff',
        marginBottom: 10,
        fontSize: 10
    },
    powerCompanyFont: {
        fontSize: 12,
        fontFamily: 'Cochin'
    }

});