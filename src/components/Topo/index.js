import {View, Text, Image} from 'react-native';
import logo from '../../assets/logo-gray.png';
import styles from './styles';

export default function Topo() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.titulo}>Olá, Gustavo</Text>
      <Text style={styles.subtitulo}>Encontre os melhores produtores</Text>
    </View>
  );
}
