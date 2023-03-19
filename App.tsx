import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import PressableDemo from './src/components/PressableDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <PressableDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
