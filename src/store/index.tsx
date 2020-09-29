/**
 * Use for store some glabal datas
 */
class AppStore {
    private catagories: string[];

    constructor() {
        this.catagories = [];
    }

    /**
     * Set the categories (call when app started)
     * @param newCatagories categories for the game
     */
    setCatagories(newCatagories: string[]) {
        this.catagories = newCatagories;
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