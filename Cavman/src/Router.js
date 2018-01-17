import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './Login'
import Welcome from './Welcome'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

const RouterComponent = () => {
    return (
        <Router>
            <Stack titleStyle={{color : "#FFF"}} navTransparent navBarButtonColor='#fff'>
                <Scene key='WelcomeScreen' component={Welcome} title="" hideNavBar/>
                <Scene key='LoginScreen' component={Login} title="TEAR AND GRAB" />
                <Scene key='RegisterScreen' component={Register} title="TEAR AND GRAB" />
                <Scene key='ForgotPasswordScreen' component={ForgotPassword} title="TEAR AND GRAB" />
            </Stack>
            
        </Router>
    );
};

export default RouterComponent;