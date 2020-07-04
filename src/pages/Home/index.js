import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';


import styles from './styles';
import img1 from '../../assets/1.png';


export default function Home() {

  const [state, setState] = useState([true]);

  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        
        onPress={() => ShowHideComponent()}>
      <Text style={styles.buttonText}>Selecionar filtros</Text>
      </TouchableOpacity>

      {
    state.show ? (
      <ScrollView
        horizontal={true}
      >
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
        <Image source={img1} />


      </ScrollView>

    ) : null
  }


    </View >
  );
}
