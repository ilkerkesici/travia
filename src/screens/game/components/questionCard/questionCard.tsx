import { colors } from 'assets';
import { BasicButton } from 'components';
import { IQuestion } from 'enums';
import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { configureAnswers } from 'screens/game/game.helper';
import styles from './questionCard.styles';

interface IQuestionCard {
    questionInfo: IQuestion,
    answers: string[]
}

interface IRenderItem {
    item: string,
    index: number
}

const QuestionCard = (props: IQuestionCard) => {
    const { questionInfo, answers } = props;
    const [answer, setAnswer] = useState<string | null>(null);

    const [extraStyles, setExtraStyles] = useState({
        button: styles.normalButton,
        textColor: colors.black,
        isAnswered: false,
        answer: ""
    })

    const onPressAnswer = useCallback((selectedAnswer :string) => {
        if(answer) return;
        setAnswer(selectedAnswer);
        if(questionInfo.correct_answer === selectedAnswer){ // The answer is correnct

        }
        
    }, [setAnswer, answer]);

    const renderItem = useCallback((renderProps: IRenderItem) => {
        const { item } = renderProps;
        let textColor =  colors.black;
        let buttonStyle = styles.normalButton;
        if(answer && item === questionInfo.correct_answer){
            buttonStyle = styles.successStyle;
            textColor = colors.white;
        
        } else if(answer && answer === item){
            buttonStyle= styles.wrongStyle;
            textColor = colors.white;
        }
            
        return(
            <BasicButton textColor={textColor} style={buttonStyle} title={item} onPress={() => onPressAnswer(item)} />
        );
    }, [onPressAnswer, extraStyles, answer, questionInfo])

    const keyExtractor = useCallback((item: string, index: number) => item, []);

    return (
        <View>
            <View style={styles.questionCard}>
                <Text style={styles.question}>{questionInfo.question}</Text>
            </View>
            <FlatList 
                data={answers}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
}

export default QuestionCard;