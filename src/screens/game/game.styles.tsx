import { colors } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    questionCard: {
        minHeight: 200,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 40
    },
    question: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    errorText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white
    }
});

