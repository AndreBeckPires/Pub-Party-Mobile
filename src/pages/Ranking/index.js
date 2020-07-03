import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

import styles from './styles';

export default function Ranking() {

  const [dados, setDados] = useState([]);

  let data = [
    { userName: 'Arthur', highScore: 80 },
    { userName: 'André', highScore: 120 },
    { userName: 'Juliana', highScore: 200 },
    { userName: 'João', highScore: 150 },
    { userName: 'Isa', highScore: 40 },
    { userName: 'Caio', highScore: 100 },
    { userName: 'Leticia', highScore: 60 },
    { userName: 'Mateus', highScore: 20 },
  ];

  let dataAmigos = [
    { userName: 'Arthur', highScore: 80 },
    { userName: 'André', highScore: 120 },
    { userName: 'Juliana', highScore: 200 },
    { userName: 'Caio', highScore: 100 },
  ]

  function loadRanking(data) {
    setDados(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => loadRanking(dataAmigos)}>
          <Text style={styles.buttonText}>Amigos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => loadRanking(data)}>
          <Text style={styles.buttonText}>Global</Text>
        </TouchableOpacity>
      </View>

      <Leaderboard
        data={dados}
        sortBy='highScore'
        labelBy='userName' />
    </View>
  );
}
