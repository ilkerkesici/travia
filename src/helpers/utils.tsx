
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
}

const Utils = new Utilities();

export default Utils;