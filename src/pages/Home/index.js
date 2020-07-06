import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal';

import styles from './styles';

import ambevImg from '../../assets/limpo.png';
import lgbtImg from '../../assets/lgbt.png';
import expensiveImg from '../../assets/barato.png';

import barAmbev from '../../assets/barambev.jpg';
import barLgbt from '../../assets/barlgbt.jpg';
import barExpensive from '../../assets/barexpensive.jpg';
import andre from '../../assets/andre.png';
import caio from '../../assets/caio.png';
import juliana from '../../assets/juliana.png';
import arthur from '../../assets/arthur.png';

Icon.loadFont();

export default function Home() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [bares, setBares] = useState([]);

  let data = [
    { name: 'Bar do Arthur', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barLgbt },
    { name: 'Bar do André', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barAmbev },
    { name: 'Bar da Juliana', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: false, imgUrl: barExpensive },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
    { name: 'Bar do Arthur', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barLgbt },
    { name: 'Bar do André', location: 'Cidade Baixa - Porto Alegre', lgbt: true, expensive: true, ambev: false, imgUrl: barAmbev },
    { name: 'Bar da Juliana', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: false, imgUrl: barExpensive },
    { name: 'Bar do Caio', location: 'Cidade Baixa - Porto Alegre', lgbt: false, expensive: true, ambev: true, imgUrl: barAmbev },
  ];

  const [state, setState] = useState([true]);

  function showModal() {
    setModalVisible(!isModalVisible);
  }

  function navigateToBares(bares) {
    navigation.navigate('Bares', { bares });
  }

  function loadBares() {
    setBares(data);
  }

  useEffect(() => {
    loadBares();
  }, []);

  function ShowHideComponent() {
    if (state.show == true) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <View style={styles.iconsView}>
        <TouchableOpacity
            style={styles.iconButtons}
            onPress={()  => showModal()}>
            <MaterialCommunityIcons style={{paddingRight: 10}} name="information" color="#D3CEC4" size={26} />
          </TouchableOpacity>
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
      
      <View >
        <Modal style={styles.modal} isVisible={isModalVisible}>
        <TouchableOpacity style ={{flexDirection: 'row'}}
            onPress={() => showModal()}>
        <Icon style={styles.backModal} name="arrow-back" />
        <Text style={styles.headerModal}>Informações</Text>
        </TouchableOpacity>
        <Text style={styles.groupNameText}>Equipe 42</Text>
        <View style={{flexDirection: 'row'}} >
        <View style={styles.members}>
        <Text style={styles.nameText}>André</Text>
        <Image source={andre} />
        </View>
        <View style={styles.members}>
        <Text style={styles.nameText}>Arthur</Text>
        <Image source={arthur} />
        </View>
        <View style={styles.members}>
        <Text style={styles.nameText}>Caio</Text>
        <Image source={caio} />
        </View>
        <View style={styles.members}>
        <Text style={styles.nameText}>Juliana</Text>
        <Image  source={juliana} />
        </View>
        </View>
        <View style={styles.viewDosCreditos}>
        <Text style={styles.creditsText}>Solução desenvolvida para o desafio AMBEV</Text>
        <Text style={styles.creditsText}>Mega Hack 3º edição</Text>
        </View>
        <Text style={styles.credits}>Ícones feitos por <Text onPress={() => Linking.openURL('http://www.freepik.com/')}>Freepik</Text> from <Text onPress={() => Linking.openURL('https://www.flaticon.com/br')}> www.flaticon.com</Text></Text>

        </Modal>
      </View>

    </View >
  );
}