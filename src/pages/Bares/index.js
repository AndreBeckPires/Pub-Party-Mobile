import React, { useState, useEffect } from 'react';
import { Text, View, Constants, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './styles';

import barAmbev from '../../assets/barambev.png';
import barLgbt from '../../assets/barlgbt.png';
import barExpensive from '../../assets/barexpensive.png';

Icon.loadFont();

export default function Bares() {


  function navigateBack() {
    navigation.goBack();
  }
  const navigation = useNavigation();
  const route = useRoute();
  const [state1, setState1] = useState([false]);
  const [state2, setState2] = useState([false]);
  const [state3, setState3] = useState([false]);
  const [isModalVisible, setModalVisible] = useState(false);

  const { tag } = route.params;

  function showModal() {
    setModalVisible(!isModalVisible);
  }

  useEffect(() => {
    if (tag === 1) {
      setState1({ show: true });
    }
    if (tag === 2) {

      setState2({ show: true });
    }
    if (tag === 3) {
      setState3({ show: true });
    }

  }, []);

  return (
    <View>



      {
        state1.show ? (
          <View>
            <Image source={barLgbt} />
            <Text> Dados do bar LGBT</Text>
          </View>
        ) : null
      }
      {
        state2.show ? (
          <View>
            <Image source={barAmbev} />
            <Text> Dados do bar Ambev</Text>
          </View>
        ) : null
      }

      {
        state3.show ? (
          <View>
            <Image source={barExpensive} />
            <Text> Dados do bar Expensive</Text>
          </View>
        ) : null
      }
      <TouchableOpacity
        onPress={() => navigateBack()}>

        <Icon name="arrow-back" color="black" size={26} />
        <Text>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => showModal()}>
        <MaterialCommunityIcons name="account-group" color={'black'} size={26} />
        <Text>Formar grupo</Text>
      </TouchableOpacity>
    

     <View style={{ flex: 1 }}>
    

        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text>Forme sua party</Text>
            
            <TouchableOpacity
        onPress={() => showModal()}>
       <Icon name="arrow-back" color="black" size={26} />
        <Text>Voltar</Text>
      </TouchableOpacity>
          </View>
        </Modal>
      </View>


    </View>
  );
}