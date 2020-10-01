import { IQuestion } from 'enums';
import React from 'react';
import {View, Text} from 'react-native';
import { configureAnswers } from 'screens/game/game.helper';
import styles from './questionCard.styles';

interface IQuestionCard {
    questionInfo: IQuestion
}

const QuestionCard = (props: IQuestionCard) => {
    const { questionInfo} = props;

    const answers = configureAnswers(questionInfo);
    return(
        <View>
            <View style={styles.questionCard}>
                <Text style={styles.question}>{questionInfo.question}</Text>
            </View>
        </View>
    );
}

export default QuestionCard;