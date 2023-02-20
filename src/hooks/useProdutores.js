import {useState, useEffect} from 'react';
import {loadProdutores} from '../servicos/load';
export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = loadProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista];
}
