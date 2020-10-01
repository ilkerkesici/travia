
import { IListItem, IQuestion } from 'enums';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './game.styles';
import { getQuestions } from './game.helper';
import { ScreenContainer } from 'components';

interface IgameState { 
    loading: boolean,
    questions: IQuestion[],
    error: boolean
 }
interface IgameProps {
    difficulty: IListItem,
    category: IListItem
}

export const Game = (props: IgameProps) => {
    const { difficulty, category } = props;
    const [state, setState] = useState<IgameState>({
        loading: true,
        questions: [],
        error: false
    });

    /**
     * Fetch questinos from API
     */
    const configureQuestions = useCallback(async () => {
        const questions = await getQuestions(difficulty, category);
        setState({ questions, loading: false, error: questions.length === 0});
    }, [difficulty, category, state, setState]);

    useEffect(() => {
        configureQuestions();
    }, [])

    return (
        <ScreenContainer style={styles.container}>
            
        </ScreenContainer>
    );
}


