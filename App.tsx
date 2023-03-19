import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TextInputDemo from './src/components/TextInputDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TextInputDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
