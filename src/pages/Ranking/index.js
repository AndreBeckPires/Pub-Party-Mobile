import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

import styles from './styles';

import logoImg from '../../assets/user-icon.png';

export default function Ranking() {

  const [dados, setDados] = useState(data);

  let data = [
    { userName: 'Arthur', highScore: 80, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'André', highScore: 120, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Juliana', highScore: 200, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'João', highScore: 150, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Isa', highScore: 40, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Caio', highScore: 100, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Leticia', highScore: 60, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Mateus', highScore: 20, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
  ];

  let dataAmigos = [
    { userName: 'Arthur', highScore: 80, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'André', highScore: 120, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Juliana', highScore: 200, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
    { userName: 'Caio', highScore: 100, imgUrl: 'https://www.pngkey.com/png/full/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png' },
  ]

  useEffect(() => {
   loadRanking(data);
  }, []);
  
  function loadRanking(data) {
    setDados(data);
  }

  return (
    <View style={styles.container}>
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
