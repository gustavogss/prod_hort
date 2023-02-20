import {View, Text, Image} from 'react-native';
import logo from '../../assets/logo-gray.png';
import styles from './styles';
import React from 'react';
import topo from '../../mocks/topo';

export default function Topo() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.titulo}>{topo.titulo}</Text>
      <Text style={styles.subtitulo}>{topo.subtitulo}</Text>
    </View>
  );
}
