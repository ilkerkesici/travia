
/**
 * Util function class of the application
 */
class Utilities {
    /**
     * Check the given object is funtion
     * @param checkedObject is object which is checked.
     * @return a boolean
     */
    isFunction = (checkedObject: any): boolean => {
        return checkedObject &&
            (
                {}.toString.call(checkedObject) === '[object Function]' ||
                {}.toString.call(checkedObject) === '[object AsyncFunction]'
            );
    }

    /**
     * Shuffle the given array and return it
     * @param array is any array
     */
    shufflearray = (array: any[]): any[] => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}

const Utils = new Utilities();

export default Utils;