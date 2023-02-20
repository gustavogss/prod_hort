import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import styles from './styles';
import Starts from '../Starts';

export default function Produtor({nome, imagem, distance, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  return (
    <TouchableOpacity style={styles.card} onPress={inverterSelecionado}>
      <Image style={styles.image} source={imagem} accessibilityLabel={nome} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Starts quantAtual={estrelas} edit={selecionado} big={selecionado} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}
