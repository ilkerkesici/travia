import { colors } from 'assets';
import { BasicButton } from 'components';
import { IQuestion } from 'enums';
import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { configureAnswers } from 'screens/game/game.helper';
import styles from './questionCard.styles';

interface IQuestionCard {
    questionInfo: IQuestion
}

interface IRenderItem {
    item: string,
    index: number
}

const QuestionCard = (props: IQuestionCard) => {
    const { questionInfo } = props;
    const answers = configureAnswers(questionInfo);

    const [extraStyles, setExtraStyles] = useState({
        button: styles.normalButton,
        textColor: colors.black,
        isAnswered: false,
        answer: ""
    })

    const onPressAnswer = useCallback((answer :string) => {
        if(questionInfo.correct_answer === answer){ // The answer is correnct

        }
        
    }, []);

    const renderItem = useCallback((renderProps: IRenderItem) => {
        const { item } = renderProps;
        const { button, textColor } = extraStyles;
        // TODO
        return(
            <BasicButton textColor={textColor} style={button} title={item} onPress={() => onPressAnswer(item)} />
        );
    }, [onPressAnswer, extraStyles])

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