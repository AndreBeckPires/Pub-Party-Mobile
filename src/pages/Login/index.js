import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


import api from '../../services/api';

import styles from './styles';

import logo from '../../../assets/Beer-icon.png';

export default function Home() {
    const navigation = useNavigation();
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [type, setType] = React.useState('');

    async function loginFunction() {      
        
        setType('bar');
        console.log(user,password,type);
        try{
        const response = await api.post('sessions',  {
            params: { user, password, type }
        });
        console.log(response);

        navigateToPubPage();
    } catch (err) {
        alert('Falha no login, tente novamente')
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
                    onChangeItem={item => setSelected({
                        product: item.label,
                    })}
                />

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => loginFunction()}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => navigateToUserPage()}>
                    <Text style={styles.buttonText}>Entrar como usuário</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => navigateToPubPage()}>
                    <Text style={styles.buttonText}>Entrar como Bar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}