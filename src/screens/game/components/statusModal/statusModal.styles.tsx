import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGray
    },
    icon: {
        width: 140,
        height: 140
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginVertical: 20
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        marginVertical: 5
    }
});

export default styles;