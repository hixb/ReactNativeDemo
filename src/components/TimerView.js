import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>RN计数器</Text>
      <Text style={styles.num}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    marginVertical: 29,
  },
  num: {
    fontSize: 80,
    color: '#ccc',
    fontWeight: 'bold',
  },
});
