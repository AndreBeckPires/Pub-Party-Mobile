import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import StarRating from './StarRating';

import styles from './styles';

export default class ModalScan extends Component {
    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={this.toggleModal}>
                        <Text style={styles.actionText} onPress={this.toggleModal}>Scanear</Text>
                    </TouchableOpacity>
                </View>

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalBox}>

                        <View style={styles.sectionInfo}>
                            <Text style={styles.sectionTitle}> Sua party pontuou {this.props.value} mls! </Text>
                            <Text style={styles.sectionInfo}>Avalie sua experiência no bar</Text>
                            <StarRating />
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