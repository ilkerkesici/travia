import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    normalButton: {
        backgroundColor: colors.white
    },
    successStyle: {
        backgroundColor: colors.success
    }
})

export default styles;