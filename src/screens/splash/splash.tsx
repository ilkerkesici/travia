
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './splash.styles';
import { initialize } from './splash.helper';


interface IsplashProps { }

export const Splash = (props: IsplashProps) => {
    useEffect(() => {
        initialize();
    }, [])


    return (
        <View style={styles.container}>
            <Text>Splash</Text>
        </View>
    );
}


