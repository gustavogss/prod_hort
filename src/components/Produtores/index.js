import {Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {loadProdutores} from '../../servicos/load';
import styles from './styles';
import Produtor from '../Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = loadProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Produtor {...item} />}
      ListHeaderComponent={TopoLista}
    />
  );
}
