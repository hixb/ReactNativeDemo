import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => console.log('onPress....')}
        onLongPress={() => console.log('onLongPress....')}
        delayLongPress={3000}
        onPressIn={() => console.log('onPressIn....')}
        onPressOut={() => console.log('onPressOut....')}>
        <Text style={styles.text}>button</Text>
      </TouchableOpacity>
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
