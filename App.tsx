import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <ImageBackgroundDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
