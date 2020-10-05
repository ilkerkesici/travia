import { ANY_CATEGORY_TYPE_ID } from 'enums';
import { strings } from 'assets';

interface ICategory {
    id: number,
    name: string
}

/**
 * Use for store some glabal datas
 */
class AppStore {
    private catagories: ICategory[];

    constructor() {
        this.catagories = [{id: ANY_CATEGORY_TYPE_ID, name: strings.main.anyCategory}];
    }

    /**
     * Set the categories (call when app started)
     * @param newCatagories categories for the game
     */
    setCatagories(newCatagories: ICategory[]) {
        const newArray: ICategory[] = [{id: ANY_CATEGORY_TYPE_ID, name: strings.main.anyCategory}];
        this.catagories = newArray.concat(newCatagories);
    }

    /**
     * Get the current catagories
     */
    getCatagories(){
        return this.catagories;
    }
}

const Store = new AppStore();

export default Store;