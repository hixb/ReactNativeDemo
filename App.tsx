import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TouchableWithoutFeedbackDemo from './src/components/TouchableWithoutFeedbackDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <TouchableWithoutFeedbackDemo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
