import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    seperator: {
        margin: 10,
    },
    emtyWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },

    list: {
        marginTop: 10
    }
});

export default styles;