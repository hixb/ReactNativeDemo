import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TimerView from './src/components/TimerView';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TimerView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#222',
  },
});

export default App;
