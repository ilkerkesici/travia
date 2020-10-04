
import { IQuestion } from 'enums';
import React, { useState } from 'react';
import { } from 'react-native';
import { styles } from './game.styles';
import { configureAnswers } from './game.helper';
import { ScreenContainer } from 'components';
import { strings as locale } from 'assets';
import { QuestiınCard } from './components';

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
    
    const shuffeledCurrentQuestions = configureAnswers(currentQuestion);
    return (
        <ScreenContainer style={styles.container}>
            <QuestiınCard answers={shuffeledCurrentQuestions} questionInfo={currentQuestion} />
        </ScreenContainer>
    );
}


