import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

import Modal from './Modal/Modal';

let totalValue = 0;

export default function PubHome() {
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState();

    function addItem() {
        setState([...state, selected]);
        totalValue += Number(selected.value);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Gerar QRCode</Text>

            <DropDownPicker
                items={[
                    { label: 'Cerveja 500ml', value: '500' },
                    { label: 'Cerveja 750ml', value: '750' },
                    { label: 'Cerveja 1L', value: '1000' },
                ]}

                placeholder={"Selecione um Item"}
                containerStyle={styles.dropdown}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setSelected({
                    product: item.label,
                    value: item.value
                })}
            />

            <FlatList
                style={styles.productList}
                data={state}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                renderItem={({ item: cases }) => (
                    <View style={styles.product}>
                        <Text style={styles.productText}>{cases.product}</Text>
                    </View>
                )}
            />

            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => addItem()}>
                    <Text style={styles.buttonText}>Adicionar item</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}>
                    <Modal value={totalValue.toString()} />
                </TouchableOpacity>
            </View>

        </View>
    );
}