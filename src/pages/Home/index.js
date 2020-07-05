import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useNavigation, useRoute } from '@react-navigation/native'

import Bares from '../Bares';

import styles from './styles';
import ambevImg from '../../assets/ambev.png';
import lgbtImg from '../../assets/lgbt.png';
import expensiveImg from '../../assets/expensive.png';
import barAmbev from '../../assets/barambev.jpg';
import barLgbt from '../../assets/barlgbt.jpg';
import barExpensive from '../../assets/barexpensive.jpg';

Icon.loadFont();

export default function Home() {

  const navigation = useNavigation();

  const [state, setState] = useState([true]);
  const [stateLgbt, setStateLgbt] = useState([true]);
  const [stateAmbev, setStateAmbev] = useState([true]);
  const [stateExpensive, setStateExpensive] = useState([true]);
  const [lgbt, setLgbt] = useState([true]);
  const [ambev, setAmbev] = useState([true]);
  const [expensive, setExpensive] = useState([true]);

  function navigateToBares(tag) {
    navigation.navigate('Bares', { tag });
  }

  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  }

  function selectLGBT() {
    if (lgbt == false) {
      setLgbt(true);
    } else {
      setLgbt(false);
    }

  }

  function selectAMBEV() {
    if (ambev == false) {
      setAmbev(true);
    } else {
      setAmbev(false);
    }
  }

  function selectExpensive() {
    if (expensive == false) {
      setExpensive(true);
    } else {
      setExpensive(false);
    }
  }

  function showBars() {
    if (lgbt == false) {
      setStateLgbt({ show: true });
    } else {
      setStateLgbt({ show: false });
    }
    if (ambev == false) {
      setStateAmbev({ show: true });
    } else {
      setStateAmbev({ show: false });
    }
    if (expensive == false) {
      setStateExpensive({ show: true });
    } else {
      setStateExpensive({ show: false });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>

        <View style={styles.iconsView}>
          <TouchableOpacity
            style={styles.iconButtons}
            onPress={() => ShowHideComponent()}>
            <Icon name="filter-list" color="#D3CEC4" size={26} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButtons}
            onPress={() => showBars()}>
            <Icon name="search" color="#D3CEC4" size={26} />
          </TouchableOpacity>
        </View>
      </View >

      {
        state.show ? (
          <View style={styles.filtersView}>
            <ScrollView horizontal={true}>
              <TouchableOpacity onPress={() => selectAMBEV()}>
                <Image style={styles.filterIcon} source={ambevImg} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => selectLGBT()}>
                <Image style={styles.filterIcon} source={lgbtImg} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => selectExpensive()}>
                <Image style={styles.filterIcon} source={expensiveImg} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : null
      }

      < ScrollView >
        {
          stateLgbt.show ? (<View style={styles.bares}>
            <TouchableOpacity
              onPress={() => navigateToBares(1)}>
              <Image style={styles.images} source={barLgbt}
              />

            </TouchableOpacity>
          </View>
          ) : null
        }
        {
          stateAmbev.show ? (
            <View style={styles.bares}>
              <TouchableOpacity
                onPress={() => navigateToBares(2)}>

                <Image source={barAmbev}
                  style={styles.images} />
              </TouchableOpacity>

            </View>
          ) : null
        }
        {
          stateExpensive.show ? (
            <View style={styles.bares}>
              <TouchableOpacity
                onPress={() => navigateToBares(3)}>
                <Image source={barExpensive}
                  style={styles.images} />

              </TouchableOpacity>
            </View>
          ) : null
        }
      </ScrollView >
    </View >
  );
}