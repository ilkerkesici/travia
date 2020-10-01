
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './main.styles';
import { ScreenContainer, BasicButton } from 'components';

interface ImainState { }
interface ImainProps { }

export const Main = (props: ImainProps) => {
    const [state, setState] = useState<ImainState>({});
    return (
        <ScreenContainer style={styles.container}>
            <Text style={{color: 'black', fontSize: 20}}>Main</Text>
            <BasicButton title={"Select Type"} />
        </ScreenContainer>
    );
}


