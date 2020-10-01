
import { IListItem, IQuestion, IRenderItem } from 'enums';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './game.styles';
import { configureAnswers } from './game.helper';
import { ScreenContainer } from 'components';
import { strings as locale } from 'assets';

interface IgameState {
    
}
interface IgameProps {
    questions: IQuestion[]
}

interface IGameState {
    index: number,
    score: number,
    totalTimeSpent: number,
}

export const Game = (props: IgameProps) => {
    const strings = locale.main;
    const [questions] = useState<IQuestion[]>(props.questions);
    const [gameState, setGameState] = useState<IGameState>({
        index: 0,
        score: 0,
        totalTimeSpent: 0
    });

    const { index } = gameState;
    const currentQuestion = questions[index];
    const answers = configureAnswers(currentQuestion);
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.questionCard}>
                <Text style={styles.question}>{currentQuestion.question}</Text>
            </View>
            
        </ScreenContainer>
    );
}


