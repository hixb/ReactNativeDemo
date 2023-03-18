import React from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <View style={[styles.subView]} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: '#ccc',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  subView: {
    width: 100,
    height: 100,
    backgroundColor: '#222',
    position: 'absolute',
    top: 30,
    left: 20,
  },
});
