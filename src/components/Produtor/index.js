import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Starts from '../Starts';

export default function Produtor({nome, imagem, distance, estrelas}) {
  const [select, setSelect] = useState(false);
  return (
    <TouchableOpacity style={styles.card} onPress={() => setSelect(!select)}>
      <Image style={styles.image} source={imagem} accessibilityLabel={nome} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Starts quantAtual={estrelas} edit={select} big={select} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}
