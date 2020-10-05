import { colors } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    tab: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    timerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    pageNumContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    pageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white
    }
});

