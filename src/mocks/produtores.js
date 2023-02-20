import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import grow from '../assets/produtores/grow.png';
import jennyjack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';

const numberRadom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Jenny-Jack Farm',
      imagem: jennyjack,
      distancia: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
  ],
};

export default produtores;
