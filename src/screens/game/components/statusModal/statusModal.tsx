import React from 'react';
import { View, Modal, Image, Text } from 'react-native';
import styles from './statusModal.styles';
import { determineStatusmodalData } from '../../game.helper';
import { strings as locales } from 'assets';
import { BasicButton } from 'components';
import { EStatus } from 'enums';

interface IStatusModal {
    status: EStatus,
    visible: boolean,
    score: number,
    onPressButton: (status: EStatus) => void
}

/**
 * Run on answer the question
 * @param props 
 */
const StatusModal = (props: IStatusModal) => {
    const { status, visible, score, onPressButton } = props;
    const strings = locales.game;
    const data = determineStatusmodalData(status);
    return (
        <Modal
            visible={visible}
            transparent={false}
            animationType="slide"
        >
            <View style={[styles.contianer, {backgroundColor: data.backgroundColor}]}>
                <Image source={data.image} style={styles.icon} />
                <Text style={[styles.title, {color: data.textColors}]}>{data.title}</Text>
                <Text style={[styles.scoreText, {color: data.textColors}]}>{data.desc}</Text>
                <Text style={[styles.scoreText, {color: data.textColors}]}>{strings.total} : {score}</Text>
                <BasicButton onPress={() => onPressButton(status)} style={{backgroundColor: data.buttonColor}} title={data.button} />
            </View>
        </Modal>
    );
}

export default StatusModal;
