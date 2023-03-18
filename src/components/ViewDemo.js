import React from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <View style={styles.row1}>
        <View style={[styles.subView1, styles.subviewArea]} />
        <View style={[styles.subView2, styles.subviewArea]} />
        <View style={[styles.subView3, styles.subviewArea]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: '#ccc',
    height: '100%',
    width: '100%',
  },
  row1: {
    flexDirection: 'row',
    width: '100%',
    marginTop: '12%',
  },
  subviewArea: {
    height: 100,
  },
  subView1: {
    width: '25%',
    backgroundColor: 'red',
  },
  subView2: {
    width: '35%',
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: '#999',
  },
  subView3: {
    width: '40%',
    backgroundColor: 'yellow',
  },
});
