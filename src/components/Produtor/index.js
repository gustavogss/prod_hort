import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View>
      <Image source={imagem} accessibilityLabel={nome} />
      <View>
        <Text>{nome}</Text>
        <Text>{distancia}</Text>
      </View>
    </View>
  );
}
