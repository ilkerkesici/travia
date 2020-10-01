import React, { useCallback } from 'react';
import { FlatList, Modal, View } from 'react-native';
import styles from './modalPicker.styles';
import ListItem from '../listItem';
import { IListItem as IList, IRenderItem } from 'enums';


interface IModalPickerProps {
    data: IList[],
    visible: boolean,
    onSelect: (item: IList) => void
}



const ModalPicker = (props: IModalPickerProps) => {
    const { data, visible, onSelect } = props;

    const renderItem = useCallback((props: IRenderItem) => (
        <ListItem onPress={() => onSelect(props.item)} title={props.item.value} />
    ), [])
    const keyExtractor = useCallback((item: any, index: number) => index.toString(), []);

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={"fade"}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <FlatList
                        data={data}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default ModalPicker;
