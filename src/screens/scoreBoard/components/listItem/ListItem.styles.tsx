import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary
    },
    text: {
        fontSize: 16,
        color: colors.primary
    },
    body: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    wrapper: {
        flex: 1
    },
    bottom: {
        alignItems: 'flex-end',
        marginTop: 10
    }
});

export default styles;