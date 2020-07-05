import React, { useState, useEffect } from 'react';
import { Text, View, Constants, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './styles';

import barAmbev from '../../assets/barambev.jpg';
import barLgbt from '../../assets/barlgbt.jpg';
import barExpensive from '../../assets/barexpensive.jpg';

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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateBack()}>
        <Icon style={styles.back} name="arrow-back" />
      </TouchableOpacity>
      {
        state1.show ? (
          <View>
            <View style={styles.telaBAR}>
              <Image style={styles.images} source={barLgbt} />
            </View>
            <View style={styles.texts}>
              <Text style={styles.textH1}>Ambev</Text>
              <Text style={styles.text}>AQUI VAO OS DADOS SOBRE O BAR AHSUIDHASUIDHASUIODHASIUDOHASDIUAHSDUIASHDIUAHSDIUASHDIUASHDIUSADHIASGYUDGSAUYDGASDUYAGSDUYASGDUYASGDUASYDGASUYDGSAUYDGSAUYDGASUYDGSADUYAGSddYUASGDUYASGIDYIUGDSUYUGAYUASGDYUIAYUAGSDUYISGASDYSAGDYUA</Text>
            </View>
          </View>
        ) : null
      }
      {
        state2.show ? (

          <View>
            <View style={styles.telaBAR}>
              <Image style={styles.images} source={barAmbev} />
            </View>
            <View style={styles.texts}>
              <Text style={styles.textH1}>Ambev</Text>
              <Text style={styles.text}>AQUI VAO OS DADOS SOBRE O BAR AHSUIDHASUIDHASUIODHASIUDOHASDIUAHSDUIASHDIUAHSDIUASHDIUASHDIUSADHIASGYUDGSAUYDGASDUYAGSDUYASGDUYASGDUASYDGASUYDGSAUYDGSAUYDGASUYDGSADUYAGSddYUASGDUYASGIDYIUGDSUYUGAYUASGDYUIAYUAGSDUYISGASDYSAGDYUA</Text>
            </View>
          </View>
        ) : null
      }

      {
        state3.show ? (
          <View>
            <View style={styles.telaBAR}>
              <Image style={styles.images} source={barExpensive} />
            </View>
            <View style={styles.texts}>
              <Text style={styles.textH1}>Expensive</Text>
              <Text style={styles.text}>AQUI VAO OS DADOS SOBRE O BAR AHSUIDHASUIDHASUIODHASIUDOHASDIUAHSDUIASHDIUAHSDIUASHDIUASHDIUSADHIASGYUDGSAUYDGASDUYAGSDUYASGDUYASGDUASYDGASUYDGSAUYDGSAUYDGASUYDGSADUYAGSddYUASGDUYASGIDYIUGDSUYUGAYUASGDYUIAYUAGSDUYISGASDYSAGDYUA</Text>
            </View>
          </View>
        ) : null
      }

      <TouchableOpacity
        onPress={() => showModal()}>
        <MaterialCommunityIcons style={styles.group} name="account-group" />
      </TouchableOpacity>

      <View >
        <Modal style={styles.modal} isVisible={isModalVisible}>
          <TouchableOpacity
            onPress={() => showModal()}>
            <Icon style={styles.backModal} name="arrow-back" />
          </TouchableOpacity>
          <Text style={styles.titleModal}>Forme sua party</Text>
        </Modal>
      </View>
    </View>
  );
}