import {Pressable, View, StyleSheet, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.root}>
      <Pressable
        style={state => [styles.button, state.pressed && styles.buttonPressed]}>
        {state => {
          const {pressed} = state;

          return (
            <Text style={pressed ? styles.textPressable : styles.text}>
              {pressed ? 'pressed' : 'press me'}
            </Text>
          );
        }}
      </Pressable>
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
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPressable: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
