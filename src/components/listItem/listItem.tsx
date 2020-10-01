import React, { useCallback } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { Utils } from 'helpers';
import styles from './listItem.styles';

interface IListItem {
    onPress?: () => void,
    title: string,
    style?: ViewStyle
}


const ListItem = (props: IListItem) => {
    const { style, title, onPress } = props;

    const onPressListItem = useCallback((): void => {
        onPress && Utils.isFunction(onPress) && onPress();
    }, [onPress]);
    return (
        <TouchableOpacity
            onPress={onPressListItem}
            activeOpacity={onPress ? 0.5 : 0}
            style={[style, styles.container]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity >
    );
}

export default ListItem;