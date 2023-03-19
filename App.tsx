import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TouchableHighlightDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
