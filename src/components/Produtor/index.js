import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Produtor({nome, imagem, distance, estrelas}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imagem} accessibilityLabel={nome} />
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
      <Text>{estrelas}</Text>
    </View>
  );
}
