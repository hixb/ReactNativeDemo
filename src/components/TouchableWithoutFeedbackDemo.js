import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <Text style={styles.text}>button</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
