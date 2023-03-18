import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import ImageDemo from './src/components/ImageDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <ImageDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
