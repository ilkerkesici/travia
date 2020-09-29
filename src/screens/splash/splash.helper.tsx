import { Actions } from 'react-native-router-flux';
/**
 * Initialize app configuraiton
 * Redirect required screen
 */
export const initialize = () => {
    setTimeout(() => {
        Actions.main();
    }, 200 );
}