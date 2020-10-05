import { colors, strings as loacale } from 'assets';
import { EDifficulty, ISavedScore } from 'enums';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './ListItem.styles';

interface IListItemProps {
    data: ISavedScore
}

const ListItem = (props: IListItemProps) => {
    const { data } = props;
    let difficultyColor = colors.primary;
    const strings = loacale.scoreBoard;
    switch (data.difficulty.key) {
        case EDifficulty.Easy: difficultyColor = colors.success;
        case EDifficulty.Medium: difficultyColor = colors.warning;
        case EDifficulty.Hard: difficultyColor = colors.danger;
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{strings.score}: <Text style={styles.text}>{data.score}</Text></Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{strings.spentTime}: <Text style={styles.text}>{data.timespent}</Text></Text>
                </View>
            </View>
            <View style={[styles.body, styles.bottom]}>
                <Text style={[styles.title, {color: difficultyColor}]}>{data.difficulty.value.toUpperCase()}</Text>
            </View>
        </View>
    );
}

export default ListItem;