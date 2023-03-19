import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TouchableOpacityDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
