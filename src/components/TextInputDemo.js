import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default () => {
  const iptRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      // iptRef.current.blur();
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      <TextInput
        ref={iptRef}
        style={styles.ipt}
        autoFocus={false}
        blurOnSubmit={false}
        caretHidden={true}
        defaultValue={''}
        editable={true}
        keyboardType={'number-pad'}
        returnKeyType={'search'}
        // maxLength={11}
        multiline={false}
        textAlignVertical={'top'}
        numberOfLines={2}
        onFocus={e => console.log(e.nativeEvent)}
        onBlur={e => console.log(e.nativeEvent)}
        onChange={e => e.nativeEvent}
        onChangeText={text => console.log(text)}
        // selection={{start: 1, end: 3}}
        selectionColor={'blue'}
        selectTextOnFocus={true}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  ipt: {
    width: '100%',
    height: 50,
    backgroundColor: '#d0d0d0',
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
