
import { IQuestion } from 'enums';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './game.styles';
import { configureAnswers } from './game.helper';
import { ScreenContainer, Timer } from 'components';
import { strings as locale } from 'assets';
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

    const timer = useRef<Timer | null>(null);

    const startTimer = useCallback(() => {
        if (timer.current) timer.current.start();
    }, [timer]);

    const stopTimer = useCallback(() => {
        if (timer.current) timer.current.stop();
    }, [timer]);

    const resetTimer = useCallback(() => {
        if (timer.current) timer.current.reset();
    }, [timer]);

    const onCorrectAnswer = useCallback((score: number, timeSpent: number) => {

    }, []);

    const onWrongAnswer = useCallback((timeSpent: number) => {

    }, [])

    const onTimeIsUp = useCallback((timeSpent: number) => {

    }, []);

    useEffect(() => startTimer(),[startTimer])

    const { index } = gameState;
    const currentQuestion = questions[index];

    const shuffeledCurrentQuestions = configureAnswers(currentQuestion);
    const totalQuestion = questions.length;
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.tab}>
                <View style={styles.pageNumContainer}>
                    <Text style={styles.pageText}>{index}/{totalQuestion}</Text>
                </View>
                <View style={styles.timerContainer}>
                    <Timer ref={timer} onEnd={onTimeIsUp} maxTime={15} />
                </View>
            </View>
            <QuestiınCard answers={shuffeledCurrentQuestions} questionInfo={currentQuestion} />
        </ScreenContainer>
    );
}


