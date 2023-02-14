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
      distance: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distance: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distance: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Jenny-Jack Farm',
      imagem: jennyjack,
      distance: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distance: `${numberRadom(1, 500)}m`,
      estrelas: numberRadom(1, 5),
    },
  ],
};

export default produtores;
