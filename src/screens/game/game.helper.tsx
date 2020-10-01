import { QUESTION_AMOUNT } from "config";
import { IListItem, EDifficulty, ANY_CATEGORY_TYPE_ID, IQuestion } from "enums";
import { ApiHelper } from 'helpers';

/**
 * Get the questions from API
 * @param difficulty is difficulty which is selected from main screen
 * @param category is category of question which is selected from main screen
 */
export const getQuestions = async (difficulty: IListItem, category: IListItem): Promise<IQuestion[]> => {
    let endpoint = `api.php?amount=${QUESTION_AMOUNT}`;
    if(difficulty.key !== EDifficulty.Any) endpoint += `&difficulty=${difficulty.key}`;
    if(category.key !== ANY_CATEGORY_TYPE_ID.toString()) endpoint += `&category=${category.key}`;
    const response = await ApiHelper.getRequest(endpoint);
    if(response.success && response.data.results) return response.data.results;
    return [];
}