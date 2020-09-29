  
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './game.styles';

interface IgameState{ }
interface IgameProps{ }

export const Game = (props: IgameProps) => {
    const [state, setState] = useState<IgameState>({ });

    return (
        <View style={styles.container}>
            
        </View>
    );
}


