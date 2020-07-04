import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

import QRCode from 'react-native-qrcode-svg';

export default class QrCodeModal extends Component {
    state = {
        isModalVisible: false,
        valueForQRCode: this.props.value,
    };


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View>
                <Text style={styles.actionText} onPress={this.toggleModal}>Gerar QR Code</Text>

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalBox}>

                        <View style={styles.sectionInfo}>
                            <Text style={styles.sectionTitle}>Scaneie para pontuar! </Text>
                        </View>

                        <View style={styles.qrCodeView}>
                            <QRCode
                                value={this.state.value}
                                size={250}
                                color="black"
                                backgroundColor="white"
                            />
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={this.toggleModal}>
                                <Text style={styles.actionText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
            </View >
        );
    }
}