import React, { useCallback } from 'react';
import { ColorValue, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Spinner from '../spinner';
import styles from './basicButton.styles';
import { colors } from 'assets';
import { Utils } from 'helpers';

interface IBasicButton {
    loading?: boolean
    onPress?: () => void,
    disabled?: boolean,
    title: string,
    style?: ViewStyle,
    textColor?: ColorValue 
}

/**
 * Basic custom button
 * @param props : IBasicButton
 */
const BasicButton = (props: IBasicButton) => {
    const { loading, disabled, onPress, title, style, textColor } = props;
    const onPressButton = useCallback((): void => {
        onPress && Utils.isFunction(onPress) && onPress();
    }, [onPress])

    let color: ColorValue = colors.primary;
    if(disabled) color = colors.lightGray;
    else if(style && style.backgroundColor) color = style.backgroundColor;
    return (
        <TouchableOpacity
            onPress={onPressButton}
            style={[style, styles.container, { backgroundColor: color }]}
            activeOpacity={disabled ? 0 : 0.5}
        >
            {
                loading ?
                    <Spinner size={"small"} /> :
                    <Text style={[disabled ? styles.disableTitle : styles.activeTitle, textColor ? {color: textColor} : null]}>{title}</Text>
            }
        </TouchableOpacity>
    );
}

export default BasicButton;