import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

import logoImg from '../../assets/user-icon.png';

import styles from './styles';

export default function PubRanking() {

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
      <View style={styles.headerBar} />

      <Text style={styles.title}>Ranking</Text>

      <View style={styles.header}>
        <View style={styles.topUser}>
          <Text style={styles.topUserName}>{data[0].userName}</Text>
          <Image style={styles.topUserImg} source={logoImg} />
        </View>

        <View style={styles.topUser1}>
          <Text style={styles.topUserName}>{data[1].userName}</Text>
          <Image style={styles.topUserImg1} source={logoImg} />
        </View>

        <View style={styles.topUser}>
          <Text style={styles.topUserName}>{data[2].userName}</Text>
          <Image style={styles.topUserImg} source={logoImg} />
        </View>
      </View>

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
        labelBy='userName'
        icon={'imgUrl'}
        rankStyle={styles.rankStyle}
        containerStyyle={styles.rankContainer}
        oddRowColor={'#323F4B'}
        evenRowColor={'#1F2933'}
        labelStyle={styles.labelStyle}
        scoreStyle={styles.scoreStyle}
      />
    </View>
  );
}
