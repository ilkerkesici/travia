  
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './info.styles';
import { IListItem, IQuestion } from 'enums';
import { getQuestions } from './info.helper';
import { strings as locale } from 'assets';
import { BasicButton, ScreenContainer, Spinner } from 'components';
import { Actions } from 'react-native-router-flux';

interface IInfoState{ 
    loading: boolean,
    questions: IQuestion[],
    error: boolean
 }
interface IinfoProps{ 
    difficulty: IListItem,
    category: IListItem
 }

export const Info = (props: IinfoProps) => {
    const strings = locale.info;
    const { difficulty, category } = props;
    const [state, setState] = useState<IInfoState>({ 
        loading: true,
        questions: [],
        error: false
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

    const { loading, error } = state;

    if (loading)
        return (
            <ScreenContainer style={styles.container}>
                <Spinner size={"large"} />
            </ScreenContainer>
        );
    else if(error){
        return (
            <ScreenContainer style={styles.container}>
                <Text style={styles.title}>{strings.error}</Text>
            </ScreenContainer>
        );
    }
    const { questions } = state;
    return (
        <ScreenContainer style={styles.container}>
            <Text style={styles.title}>{strings.info}</Text>
            <BasicButton style={styles.button} title={strings.start} onPress={() => Actions.game({questions})} />
        </ScreenContainer>
    );
}


