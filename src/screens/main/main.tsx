
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './main.styles';

interface ImainState { }
interface ImainProps { }

export const Main = (props: ImainProps) => {
    const [state, setState] = useState<ImainState>({});

    return (
        <View style={styles.container}>
            <Text>Main</Text>
        </View>
    );
}


