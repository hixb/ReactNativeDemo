import React from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  const viewRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      viewRef.current.setNativeProps({
        style: {
          backgroundColor: '#666',
          width: 300,
        },
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      <View ref={viewRef} style={[styles.subView]} />
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
    height: 100,
    backgroundColor: '#222',
  },
});
