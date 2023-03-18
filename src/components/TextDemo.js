import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>person:11</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  text: {
    color: 'blue',
    fontSize: 16,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
  },
});
