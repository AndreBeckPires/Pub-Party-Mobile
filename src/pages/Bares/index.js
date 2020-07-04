import * as React from 'react';
import { Text, View, Constants } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles';

export default function Bares() {
  const navigation = useNavigation();
  const route = useRoute();
  const [state, setState] = useState([true]);
  const {tag} = route.params;
  return (

    <View>
      <Text >1</Text>    
      <Text >2</Text>  
      <Text >3</Text>  
  
        

    </View>
  );
}