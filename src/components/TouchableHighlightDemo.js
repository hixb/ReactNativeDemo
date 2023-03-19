import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => console.log('onPress...')}
        underlayColor={'#00bcd4'}>
        <Text style={styles.text}>button</Text>
      </TouchableHighlight>
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
