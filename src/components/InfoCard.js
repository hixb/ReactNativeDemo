import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default props => {
  const {name, age, levelView} = props;

  return (
    <View style={styles.root}>
      <Text style={[styles.txt, styles.txtBold]}>{`name: ${name}`}</Text>
      <Text style={[styles.txt, styles.txtBlue]}>{`age: ${age}`}</Text>
      {levelView}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'column',
  },
  txt: {
    fontSize: 20,
  },
  txtBold: {
    fontWeight: 'bold',
  },
  txtBlue: {
    color: 'blue',
  },
});
