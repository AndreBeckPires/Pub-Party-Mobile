import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.jpg';
Icon.loadFont();

export default function Home() {

  const [state, setState] = useState([true]);
  const [state2, setState2] = useState([false]);
  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  }
  function ShowHideComponent2() {
    if (state2.show == true) {
      setState2({ show: false });
    } else {
      setState2({ show: true });
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

              onPress={() => ShowHideComponent2()}>
              <Image source={img1} />
            </TouchableOpacity>

            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />
            <Image source={img1} />


          </ScrollView>

        ) : null
      }
      {
        state2.show ? (

          <Image source={img2} />

        ) : null
      }

    </View >
  );
}
