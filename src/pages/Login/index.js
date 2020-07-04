import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import logo from '../../../assets/Beer-icon.png';

export default function Home() {
    const navigation = useNavigation();

    function navigateToUserPage() {
        navigation.navigate('UserPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonView}>-

                <Image source={logo}
                    style={styles.logoImage}
                />

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => navigateToUserPage()}>
                    <Text style={styles.buttonText}>Entrar como usuário</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}>
                    <Text style={styles.buttonText}>Entrar como Bar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}