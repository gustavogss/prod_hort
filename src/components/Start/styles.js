import {StyleSheet} from 'react-native';

const stylesFunc = big =>
  StyleSheet.create({
    start: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });

export default stylesFunc;
