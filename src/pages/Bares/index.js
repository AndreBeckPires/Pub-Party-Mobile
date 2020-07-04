import * as React from 'react';
import { Text, View, Constants } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles';

export default function Bares() {
  const navigation = useNavigation();
  const route = useRoute();

  const {tag} = route.params;
  return (
    <View>
      <Text >{tag}</Text>    
      <Text >{tag}</Text>  
      <Text >{tag}</Text>  
      <Text >{tag}</Text>  
        

    </View>
  );
}