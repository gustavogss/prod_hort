import {TouchableOpacity, Image} from 'react-native';
import start from '../../assets/estrela.png';
import startgray from '../../assets/estrelaCinza.png';
import React from 'react';
import stylesFunc from './styles';

export default function Start({onPress, desabilit = true, full, big = false}) {
  const styles = stylesFunc(big);
  const getImage = () => {
    if (full) {
      return start;
    }
    return startgray;
  };
  return (
    <TouchableOpacity disabled={!desabilit} onPress={onPress}>
      <Image source={getImage()} style={styles.start} />
    </TouchableOpacity>
  );
}
