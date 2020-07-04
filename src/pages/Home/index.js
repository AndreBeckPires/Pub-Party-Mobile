import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';
import ambevImg from '../../assets/ambev.png';
import lgbtImg from '../../assets/lgbt.png';
import expensiveImg from '../../assets/expensive.png';

Icon.loadFont();

export default function Home() {

  const [state, setState] = useState([true]);
  const [stateLgbt, setStateLgbt] = useState([true]);
  const [stateAmbev, setStateAmbev] = useState([true]);
  const [stateExpensive, setStateExpensive] = useState([true]);
  const [lgbt, setLgbt] = useState([false]);
  const [ambev, setAmbev] = useState([false]);
  const [expensive, setExpensive] = useState([false]);

  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  }
  function selectLGBT(){
    if(lgbt == false){
      setLgbt(true);
    }else{
      setLgbt(false);
    }
    
  }
  function selectAMBEV(){
    if(ambev == false){
      setAmbev(true);
    }else{
      setAmbev(false);
    }
  }
  function selectExpensive(){
    if(expensive == false){
      setExpensive(true);
    }else{
      setExpensive(false);
    }
  }
  function showBars(){
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

      <TouchableOpacity
        onPress={() => ShowHideComponent()}>
        <Text>Selecionar filtros</Text>
        <Icon name="search" color="black" size={26} />
      </TouchableOpacity>

      {
        state.show ? (
          <ScrollView
            horizontal={true}
          >
            <TouchableOpacity
              onPress={() => selectAMBEV()}
            >
              <Image source={ambevImg} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectLGBT()}>
              <Image source={lgbtImg} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectExpensive()}>
              <Image source={expensiveImg} />
            </TouchableOpacity>
         
          </ScrollView>

        ) : null
      }
      <TouchableOpacity
        onPress={() => showBars()}>
        <Text>Search</Text>
        <Icon name="search" color="black" size={26} />
      </TouchableOpacity>
      <ScrollView horizontal={true}>
      {
        stateLgbt.show ? (
          <Image source={lgbtImg} />
        ) : null
      }
      {
        stateAmbev.show ? (
          <Image source={ambevImg} />
        ) : null
      }
      {
        stateExpensive.show ? (
          <Image source={expensiveImg} />
        ) : null
      }
      </ScrollView>
     



    </View >
  );
}
