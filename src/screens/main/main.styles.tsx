import { StyleSheet } from 'react-native';
import { colors } from 'assets';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 40
    },
    startButton: {
        backgroundColor: colors.secondary,
        marginTop: 30
    },
    scoreBoardContainer:{
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        marginTop: 50
    },
    scoreBoardButton: {
        color: colors.secondaryDark,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 20
    }
});

