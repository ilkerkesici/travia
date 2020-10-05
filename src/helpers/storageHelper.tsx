import AsyncStorage from '@react-native-community/async-storage';
import { EDifficulty, ISavedScore } from 'enums';

/**
 * Helper for local storage with AsyncStorage
 */
class StorageHelper {
    /**
     * Save the user score to local storage
     * @param score is score of the user
     * @param timespent is timespent (second)
     */
    async saveScore(score: number, timespent: number, difficulty: {key: EDifficulty, value: string}){
        const date = new Date();
        const addedItem = { date, score, timespent, difficulty };
        const scores = await this.getScores();
        if(scores){
            scores.push(addedItem);
            this.writeStorage(scores);
            return;
        }
        const scoresList: ISavedScore[] = [addedItem];
        this.writeStorage(scoresList);
    }

    /**
     * Get Scores array if exist
     */
    async getScores(): Promise<ISavedScore[] | null>{
        try{
            const scoresText = await AsyncStorage.getItem('@scores');
            if(!scoresText) return null;
            return JSON.parse(scoresText);
        }catch(e){
            return null;
        }
        
    }

    /**
     * Write scores the storege as synchronous
     * @param scores is score list
     */
    writeStorage(scores: ISavedScore[]){
        AsyncStorage.setItem('@scores', JSON.stringify(scores));
    }
}

const LocalStorageHelper = new StorageHelper();

export default LocalStorageHelper;