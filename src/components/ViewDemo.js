import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setHeight(200);
    }, 2000);
  }, []);

  return (
    <View style={styles.root}>
      <View
        style={[styles.subView, {height}]}
        onLayout={e => {
          console.log('subView onLayout', e.nativeEvent.layout.height);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: '#ccc',
    height: '100%',
    width: '100%',
  },
  subView: {
    width: 100,
    backgroundColor: '#222',
  },
});
