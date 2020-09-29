  
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './splash.styles';

interface IsplashState{ }
interface IsplashProps{ }

export const Splash = (props: IsplashProps) => {
    const [state, setState] = useState<IsplashState>({ });

    return (
        <View style={styles.container}>
            
        </View>
    );
}


