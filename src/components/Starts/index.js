import {View} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import Start from '../Start';

export default function Starts({quantAtual: quant, edit = false, big = false}) {
  const [quantAtual, setQuantAtual] = useState(quant);

  const RenderStarts = () => {
    const listStarts = [];
    for (let i = 0; i < 5; i += 1) {
      listStarts.push(
        <Start
          key={i}
          onPress={() => setQuantAtual(i + 1)}
          desabilit={!edit}
          full={i < quantAtual}
          big={big}
        />,
      );
    }
    return listStarts;
  };
  return (
    <View style={styles.starts}>
      <RenderStarts />
    </View>
  );
}
