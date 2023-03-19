import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import ButtonDemo from './src/components/ButtonDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <ButtonDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
