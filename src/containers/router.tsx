import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Splash, Main, Game } from '../screens';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" component={Splash} hideNavBar type="reset" />
                <Scene key="main" component={Main} hideNavBar type="reset" />
                <Scene key="game" component={Game} hideNavBar />
            </Stack>
        </Router>
    )
}


export default RouterComponent;