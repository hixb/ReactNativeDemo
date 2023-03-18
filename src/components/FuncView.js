import React from 'react';
import {Text, View, ScrollView} from 'react-native';

export default props => {
  const {name, age, level} = props;

  // 通过useState来定义一个变量
  const [address, setAddress] = React.useState('China');

  // 获取ScrollView的ref
  const scrollViewRef = React.useRef(null);

  React.useEffect(() => {}, []);

  const renderProps = () => {
    return (
      <Text style={{color: '#fff'}}>
        {`name: ${name}, age: ${age}, level: ${level}`}
      </Text>
    );
  };

  const renderAddress = () => {
    return <Text style={{color: 'red'}}>{address}</Text>;
  };

  const renderList = () => {
    return (
      <ScrollView ref={scrollViewRef}>
        <Text style={{color: 'yellow', marginVertical: 12}}>Aaa1</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>BBB</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>ccc</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>ddd</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>eee</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>fff</Text>
      </ScrollView>
    );
  };

  return (
    <View style={{width: '100%', height: 200, backgroundColor: '#222'}}>
      {renderProps()}
      {renderAddress()}
      {renderList()}
    </View>
  );
};
