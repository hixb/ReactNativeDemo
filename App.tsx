/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import ClassView from './src/components/ClassView';

function App(): JSX.Element {
  // const [showClassView, setShowClassView] = useState<boolean>(true);
  //
  // useEffect(() => {
  //   setTimeout(() => setShowClassView(false), 2000);
  // }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <ClassView name="zhangsan" age={12} level="top" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
