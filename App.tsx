import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import ViewDemo from './src/components/ViewDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <ViewDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
