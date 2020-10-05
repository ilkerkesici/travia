
import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import { styles } from './main.styles';
import { ScreenContainer, BasicButton, ModalPicker } from 'components';
import { strings as locale } from 'assets';
import { getDifficultyData, getCategoriesAsListItem } from './main.helper';
import { IListItem } from 'enums';
import { Actions } from 'react-native-router-flux';

interface IMainState {
    difficulty: IListItem,
    category: IListItem,
    difficultyModalVisible: boolean,
    categoryModalVisible: boolean
}

interface IDatas {
    difficulties: IListItem[],
    categories: IListItem[]
}

export const Main = () => {

    const [datas] = useState<IDatas>({
        difficulties: getDifficultyData(),
        categories: getCategoriesAsListItem()
    })

    const { difficulties, categories } = datas;

    const [state, setState] = useState<IMainState>({
        difficulty: difficulties[0],
        category: categories[0],
        difficultyModalVisible: false,
        categoryModalVisible: false,
    });

    /**
     * Run on select category modal
     * @param selectedCategory is selected category
     */
    const onSelectCategory = useCallback((selectedCategory: IListItem) => {
        setState({ ...state, categoryModalVisible: false, category: selectedCategory });
    }, [state, setState]);

    /**
     * Run on select difficulty
     * @param selectedDifficulty is selected difficulty
     */
    const onSelectDifficulty = useCallback((selectedDifficulty: IListItem) => {
        setState({ ...state, difficultyModalVisible: false, difficulty: selectedDifficulty });
    }, [state, setState]);

    /**
     * Run on press start button and go to game with parameters
     */
    const onPressStart = useCallback(() => {
        const { difficulty, category } = state;
        Actions.info({ difficulty, category });
    }, [state])

    const strings = locale.main;
    const { difficulty, category, categoryModalVisible, difficultyModalVisible } = state;
    return (
        <ScreenContainer style={styles.container}>
            <Text style={styles.title}>{strings.welcome}</Text>
            <BasicButton title={difficulty.value} onPress={() => setState({ ...state, difficultyModalVisible: true })} />
            <BasicButton title={category.value} onPress={() => setState({ ...state, categoryModalVisible: true })} />
            <BasicButton title={strings.start} onPress={onPressStart} style={styles.startButton} />
            <ModalPicker onSelect={onSelectDifficulty} visible={difficultyModalVisible} data={difficulties} />
            <ModalPicker onSelect={onSelectCategory} visible={categoryModalVisible} data={categories} />
        </ScreenContainer>
    );
}


