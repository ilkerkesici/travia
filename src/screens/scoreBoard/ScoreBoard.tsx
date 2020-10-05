import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { LocalStorageHelper } from 'helpers';
import { ScreenContainer } from 'components';
import styles from './ScoreBoard.styles';
import { ISavedScore } from 'enums';
import { ListItem } from './components';

interface IScoreBoardState {
    scores: ISavedScore[] | null,
    loading: boolean
}

interface IRenderItem {
    item: ISavedScore,
    index: number
}

const ScoreBoard = () => {

    const [state, setState] = useState<IScoreBoardState>({
        scores: null,
        loading: true
    });

    /**
     * Get scores from storage
     */
    const getScores = useCallback(async () => {
        if(!state.loading)
            setState({...state, loading: true});
        const scores = await LocalStorageHelper.getScores();
        setState({loading: false, scores: scores});
    }, [state, setState]);

    const renderItem = useCallback((props: IRenderItem) => <ListItem data={props.item} />, []);
    const keyExtractor = useCallback((item: ISavedScore, index: number) => item.score.toString() + '-' +index.toString(), []);

    useEffect(() => {
        getScores();
    }, [])
    const { loading, scores } = state;
    return(
        <ScreenContainer>
            <FlatList
                data={scores}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                refreshing={loading}
                onRefresh={getScores}
            />
        </ScreenContainer>
    );
}

export default ScoreBoard;