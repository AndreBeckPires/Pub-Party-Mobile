import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';
import styles from './styles';


import whats from '../../assets/wpp.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import ambevImg from '../../assets/ambev.png';
import lgbtImg from '../../assets/lgbt.png';
import expensiveImg from '../../assets/expensive.png';

Icon.loadFont();

export default function Bares() {
  function navigateBack() {
    navigation.goBack();
  }

  const navigation = useNavigation();
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState('');
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState();
  const [lgbt, setLgbt] = useState([false]);
  const [ambev, setAmbev] = useState([false]);
  const [expensive, setExpensive] = useState([false]);
  const bares = route.params.bares;

  useEffect(() => {
    ShowHideComponent();
  }, []);

  function ShowHideComponent() {
    if (bares.lgbt == true) {
      setLgbt({ show: true });
    }
    if (bares.ambev == true) {
      setAmbev({ show: true });
    }
    if (bares.expensive == true) {
      setExpensive({ show: true });
    }
  }

  function addItem() {
    setState([...state, selected]);
    console.log(selected);
  }

  function showModal() {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateBack()}>
        <Icon style={styles.back} name="arrow-back" />
      </TouchableOpacity>
      <View>
        <View style={styles.telaBAR}>
          <Image style={styles.images} source={bares.imgUrl} />
        </View>
        <View style={styles.texts}>
          <Text style={styles.textH1}>{bares.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            { ambev.show ? (<Image isVisible={bares.ambev} source={ambevImg} /> ) : null}
            { lgbt.show ? (<Image isVisible={bares.lgbt} source={lgbtImg} /> ) : null}
            { expensive.show ? (<Image isVisible={bares.expensive} source={expensiveImg} /> ) : null}
          </View>
          <Text style={styles.text}>{bares.location}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.partyButton} onPress={() => showModal()}>
        <Text style={styles.partyButtonText}> Formar Party</Text>
        <MaterialCommunityIcons style={styles.group} name="account-group" />
      </TouchableOpacity>

      <View >
        <Modal style={styles.modal} isVisible={isModalVisible}>
          <TouchableOpacity
            onPress={() => showModal()}>
            <Icon style={styles.backModal} name="arrow-back" />
          </TouchableOpacity>
          <Text style={styles.titleModal}>Forme sua party</Text>
          <TextInput

            style={{
              width: '80%',
              marginTop: '10%',
              backgroundColor: "#D3CEC4",

            }}
            label="De um nome para sua party"
            value={text}
            onChangeText={text => setText(text)
            }
          />
          <View style={{

            width: '80%',
            height: '10%',
            paddingTop: 10,
          }}>

            <DropDownPicker
              items={[
                { label: 'Arthur' },
                { label: 'André' },
                { label: 'Juliana' },
                { label: 'Caio' },
              ]}
              style={{ backgroundColor: '#D3CEC4' }}
              placeholder={"Monte sua party"}
              containerStyle={styles.dropdown}
              dropDownStyle={{ backgroundColor: '#D3CEC4' }}
              onChangeItem={item => setSelected({
                product: item.label,

              })}
            />

            <FlatList
              style={styles.productList}
              data={state}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              renderItem={({ item: cases }) => (
                <View style={styles.product}>
                  <Text style={styles.productText}>{cases.product}</Text>
                </View>
              )}
            />
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => addItem()}>
              <Text style={styles.buttonText}>Adicionar item</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.socialMedia}>
            <Image style={styles.mediaImages} source={twitter} />
            <Image style={styles.mediaImages} source={insta} />
            <Image style={styles.mediaImages} source={whats} />
          </View>
        </Modal>
      </View>
    </View>
  );
}