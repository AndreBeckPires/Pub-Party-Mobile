import React, { useState, useEffect } from 'react';
import { Text, View, Constants, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles';

import barAmbev from '../../assets/barambev.png';
import barLgbt from '../../assets/barlgbt.png';
import barExpensive from '../../assets/barexpensive.png';



export default function Bares() {


  const navigation = useNavigation();
  const route = useRoute();
  const [state1, setState1] = useState([false]);
  const [state2, setState2] = useState([false]);
  const [state3, setState3] = useState([false]);
  
  const { tag } = route.params;

  useEffect(()=>{
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
          <Image source={barLgbt}/>
          </View>
        ) : null
      }
       {
        state2.show ? (
          <View>
          <Image source={barAmbev}/>
          </View>
        ) : null
      }

      {
        state3.show ? (
          <View>
          <Image source={barExpensive}/>
          </View>
        ) :  null
      }




    </View>
  );
}