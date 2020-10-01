
import { IListItem, IQuestion, IRenderItem } from 'enums';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './game.styles';
import { getQuestions, configureAnswers } from './game.helper';
import { ScreenContainer, Spinner } from 'components';
import { strings as locale } from 'assets';

interface IgameState {
    loading: boolean,
    questions: IQuestion[],
    error: boolean
}
interface IgameProps {
    difficulty: IListItem,
    category: IListItem
}

interface IGameState {
    index: number,
    score: number,
    totalTimeSpent: number,
}

export const Game = (props: IgameProps) => {
    const strings = locale.main;
    const { difficulty, category } = props;
    const [state, setState] = useState<IgameState>({
        loading: true,
        questions: [],
        error: false
    });

    const [gameState, setGameState] = useState<IGameState>({
        index: 0,
        score: 0,
        totalTimeSpent: 0
    });

    /**
     * Fetch questinos from API
     */
    const configureQuestions = useCallback(async () => {
        const questions = await getQuestions(difficulty, category);
        setState({ questions, loading: false, error: questions.length === 0 });
    }, [difficulty, category, state, setState]);

    useEffect(() => {
        configureQuestions();
    }, [])

    const { loading, error, questions } = state;

    if (loading)
        return (
            <ScreenContainer style={styles.container}>
                <Spinner size={"large"} />
            </ScreenContainer>
        );
    else if(error){
        return (
            <ScreenContainer style={styles.container}>
                <Text style={styles.errorText}>{strings.error}</Text>
            </ScreenContainer>
        );
    }

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


