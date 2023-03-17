import React from 'react';
import {
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';

export default props => {
  const {name, age, level} = props;

  // 通过useState来定义一个变量
  const [address, setAddress] = React.useState('China');

  // 获取ScrollView的ref
  const scrollViewRef = React.useRef(null);

  // 获取屏幕宽高
  const {width, height} = useWindowDimensions();
  console.log(`width: ${width}, height: ${height}`);

  // 获取系统主题
  const colorScheme = useColorScheme();
  console.log(`colorScheme: ${colorScheme}`);

  React.useEffect(() => {
    setTimeout(() => {
      setAddress('USA');

      // 滚动到底部且带动画
      scrollViewRef.current?.scrollToEnd({animated: true});
    }, 4000);
  }, []);

  React.useEffect(() => {
    console.log(address);
  }, [address]);

  return (
    <View style={{width: '100%', height: 200, backgroundColor: '#222'}}>
      <Text style={{color: '#fff'}}>
        {`name: ${name}, age: ${age}, level: ${level}`}
      </Text>
      <Text style={{color: 'red'}}>{address}</Text>
      <ScrollView ref={scrollViewRef}>
        <Text style={{color: 'yellow', marginVertical: 12}}>Aaa1</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>BBB</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>ccc</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>ddd</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>eee</Text>
        <Text style={{color: 'yellow', marginVertical: 12}}>fff</Text>
      </ScrollView>
    </View>
  );
};
