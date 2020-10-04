
import { EStatus, IQuestion } from 'enums';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './game.styles';
import { configureAnswers } from './game.helper';
import { ScreenContainer, Timer } from 'components';
import { QuestiınCard, StatusModal } from './components';
import { Actions } from 'react-native-router-flux';

interface IgameProps {
    questions: IQuestion[]
}

interface IGameState {
    index: number,
    score: number,
    totalTimeSpent: number,
    statusModalVisible: boolean,
    status: EStatus
}

export const Game = (props: IgameProps) => {
    const [questions] = useState<IQuestion[]>(props.questions);
    const [gameState, setGameState] = useState<IGameState>({
        index: 0,
        score: 0,
        totalTimeSpent: 0,
        statusModalVisible: false,
        status: EStatus.Wrong
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

    const onCorrectAnswer = useCallback((score: number) => {
        const timeSpent = timer.current ? timer.current.getCurrentTime(): 0;
        setTimeout(() => {
            setGameState({
                ...gameState, 
                statusModalVisible: true, 
                status: EStatus.Success, 
                totalTimeSpent: gameState.totalTimeSpent + timeSpent,
                score: gameState.score + score
            });
            resetTimer();
        }, 500);
        stopTimer();
        
    }, [gameState, timer, resetTimer, stopTimer]);

    const onWrongAnswer = useCallback(() => {
        const timeSpent = timer.current ? timer.current.getCurrentTime(): 0;
        setTimeout(() => {
            setGameState({
                ...gameState, 
                statusModalVisible: true, 
                status: EStatus.Wrong, 
                totalTimeSpent: gameState.totalTimeSpent + timeSpent
            });
        }, 100);
        stopTimer();
    }, [gameState, timer, setGameState, stopTimer])

    const onTimeIsUp = useCallback((timeSpent: number) => {
        setGameState({...gameState, statusModalVisible: true, status: EStatus.Timeout, totalTimeSpent: gameState.totalTimeSpent + timeSpent});
        stopTimer();
    }, [gameState, setGameState, stopTimer]);

    const onPressStatusModal = useCallback((status: EStatus) => {
        if(status === EStatus.Success){
            setGameState({
                ...gameState, 
                statusModalVisible: false, 
                status: EStatus.Success, 
                index: gameState.index + 1
            });
            startTimer();
            return;
        }
        Actions.main();
        // TODO Save latest data to asyncStorage
    }, [setGameState, gameState, startTimer]);

    useEffect(() => startTimer(),[startTimer]) // did mount

    const { index, score, statusModalVisible, status } = gameState;
    const currentQuestion = questions[index];

    const shuffeledCurrentQuestions = configureAnswers(currentQuestion);
    const totalQuestion = questions.length;
    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.tab}>
                <View style={styles.pageNumContainer}>
                    <Text style={styles.pageText}>{index + 1}/{totalQuestion}</Text>
                </View>
                <View style={styles.timerContainer}>
                    <Timer ref={timer} onEnd={onTimeIsUp} maxTime={15} />
                </View>
            </View>
            <QuestiınCard onWrong={onWrongAnswer} onCorrect={onCorrectAnswer} answers={shuffeledCurrentQuestions} questionInfo={currentQuestion} />
            <StatusModal onPressButton={onPressStatusModal} score={score} status={status} visible={statusModalVisible} />
        </ScreenContainer>
    );
}


