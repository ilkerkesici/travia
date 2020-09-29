import { Actions } from 'react-native-router-flux';
import { ApiHelper } from 'helpers';
import store from 'store';

/**
 * Initialize app configuraiton
 * Redirect required screen
 */
export const initialize = async () => {
    const fetchResult = await fetchGameCategories();
    setTimeout(() => {
        Actions.main();
    }, 200);
}

/**
 * Fetch travia categories from API
 * Then set the categories on store
 */
const fetchGameCategories = async (): Promise<boolean> => {
    try{
        const response = await ApiHelper.getRequest('api_category.php');
        if(response.success && response.data && response.data.trivia_categories){
            store.setCatagories(response.data.trivia_categories);
            return true;
        }
        return false;
    }catch(error){
        return false;
    }
}