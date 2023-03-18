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
    fontSize: 59,
    textShadowColor: '#808080',
    textShadowOffset: {width: 2, height: 4},
    textShadowRadius: 8,
  },
});
