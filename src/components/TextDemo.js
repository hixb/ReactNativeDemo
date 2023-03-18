import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
        hello哈哈哈hello哈哈哈hello哈哈哈hello哈哈哈hello哈哈哈hello哈哈哈hello哈哈哈
      </Text>
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
    fontSize: 30,
  },
});
