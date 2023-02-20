import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useMemo, useReducer} from 'react';
import styles from './styles';
import Starts from '../Starts';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={styles.card} onPress={inverterSelecionado}>
      <Image style={styles.image} source={imagem} accessibilityLabel={nome} />
      <View style={styles.info}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Starts quantAtual={estrelas} edit={selecionado} big={selecionado} />
        </View>
        <Text style={styles.distance}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}
