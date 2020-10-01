import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'assets';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.blackOpacity,
        justifyContent: 'center',
        flex: 1
    },
    card: {
        maxHeight: height - 100,
        marginHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'stretch',
        backgroundColor: colors.white
    },
    flatList: {
        flex: 1
    }
});

export default styles;