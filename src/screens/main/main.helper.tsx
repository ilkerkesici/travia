import { EDifficulty, IListItem } from 'enums';
import { strings as locale } from 'assets';
import store from 'store';



/**
 * Get the diffuculty data array
 */
export const getDifficultyData = (): IListItem[] => {
    const strings = locale.main;
    return [
        {
            key: EDifficulty.Any,
            value: strings.anyDifficulty,
        },
        {
            key: EDifficulty.Easy,
            value: strings.easy,
        },
        {
            key: EDifficulty.Medium,
            value: strings.medium,
        },
        {
            key: EDifficulty.Hard,
            value: strings.hard,
        }
    ]
}

/**
 * Convert categories a listitem
 * Then get it
 */
export const getCategoriesAsListItem = (): IListItem[] => {
    const categories = store.getCatagories();
    const length = categories.length;
    const newCategoriesList: IListItem[] = [];
    for(let i = 0; i < length; i++ ){
        const category = categories[i]; // For cache optimization
        newCategoriesList.push({
            key: category.id.toString(),
            value: category.name
        })
    }
    return newCategoriesList;

}