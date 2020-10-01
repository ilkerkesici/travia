import { colors } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    },
    button: {
        marginTop: 50,
        backgroundColor: colors.secondary
    }
});

