import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useNavigation } from '@react-navigation/native'

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

  const [bares, setBares] = useState([]);

  let data = [
    { name: 'Bar do Arthur', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barLgbt },
    { name: 'Bar do André', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barAmbev },
    { name: 'Bar da Juliana', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: false, ambev: false, imgUrl: barExpensive },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
  ];

  const [state, setState] = useState([true]);

  function navigateToBares(bares) {
    navigation.navigate('Bares', { bares });
  }
  useEffect(() => {
  
    ShowHideComponent();
  }, []);
  
  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }

    setBares(data);
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

      <FlatList
        data={bares}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: bares }) => (
          <View style={styles.bares}>
            <TouchableOpacity onPress={() => navigateToBares(bares)}>
              <Image style={styles.images} source={bares.imgUrl} />
            </TouchableOpacity>

            <View style={styles.barTextView}>
              <Text style={styles.barName}>{bares.name}</Text>
              <Text style={styles.barLocation}>{bares.location}</Text>
              <Text style={styles.barOpen}>Aberto</Text>
            </View>
          </View>
        )}
      />

    </View >
  );
}