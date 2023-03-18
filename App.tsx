import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TextDemo from './src/components/TextDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TextDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
