import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Button
        style={styles.button}
        title={'button'}
        color={'blue'}
        onPress={() => console.log('onPress....')}
        disabled={true}
      />
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
