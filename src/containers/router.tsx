import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Splash, Main, Game, Info, ScoreBoard } from 'screens';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" component={Splash} hideNavBar type="reset" />
                <Scene key="main" component={Main} hideNavBar type="reset" />
                <Scene key="info" component={Info} hideNavBar />
                <Scene key="game" component={Game} hideNavBar />
                <Scene key="scoreBoard" component={ScoreBoard} title={"Score Board"} back />
            </Stack>
        </Router>
    )
}


export default RouterComponent;