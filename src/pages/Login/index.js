import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import api from '../../services/api';

import styles from './styles';

import logo from '../../../assets/logoPubParty.png';

export default function Home() {
    const navigation = useNavigation();
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [type, setType] = React.useState('');

    async function loginFunction() {
        try {
            const response = await api.post('sessions', {
                params: { user, password, type }
            });
            navigateToPubPage();
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    function loginMock() {
        if (type.type == 'Bar') {
            navigateToPubPage();
        } else if (type.type == 'Usuário') {
            navigateToUserPage();
        }
    }

    function navigateToUserPage() {
        navigation.navigate('UserPage');
    }

    function navigateToPubPage() {
        navigation.navigate('PubPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonView}>

                <Image source={logo} style={styles.logoImage} />

                <TextInput style={{
                    width: 300,
                    marginTop: 10,
                    backgroundColor: "#D3CEC4",
                }}
                    label="Digite seu email"
                    value={user}
                    onChangeText={user => setUser(user)
                    }
                />

                <TextInput style={{
                    width: 300,
                    marginTop: 10,
                    backgroundColor: "#D3CEC4",
                }}
                    label="Digite sua senha"
                    value={password}
                    onChangeText={password => setPassword(password)
                    }
                />

                <DropDownPicker
                    items={[
                        { label: 'Usuário' },
                        { label: 'Bar' },
                    ]}
                    style={{ backgroundColor: '#D3CEC4' }}
                    placeholder={"Escolha um tipo"}
                    containerStyle={styles.dropdown}
                    dropDownStyle={{ backgroundColor: '#D3CEC4' }}
                    onChangeItem={item => setType({
                        type: item.label,
                    })}
                />

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => loginMock()}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}