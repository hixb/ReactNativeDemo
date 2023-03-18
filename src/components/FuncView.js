import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import InfoCard from './InfoCard';

export default () => {
  const [levelUp, setLevelUp] = useState(false);
  const [scrollValue, setScrollValue] = useState(['AAA', 'BBB', 'DDD']);

  useEffect(() => {
    setTimeout(() => {
      setLevelUp(true);
      setScrollValue(['SSS', 'AAADE']);
    }, 2000);
  }, []);

  const getLevelView = () =>
    levelUp ? (
      <Text style={{color: 'red'}}>{'level: up'}</Text>
    ) : (
      <Text style={{color: 'yellow'}}>{'level: down'}</Text>
    );

  const getListView = () => {
    const viewList = [];
    for (let i = 0; i < 5; i++) {
      viewList.push(<Text key={i}>{i + 1}</Text>);
    }
    return viewList;
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#f5f5f5'}}>
      <InfoCard name="John" age={20} levelView={getLevelView()}>
        <Text style={{color: 'blue'}}>{'children'}</Text>
      </InfoCard>
      {/*<ScrollView>*/}
      {/*  {scrollValue.map(item => (*/}
      {/*    <Text key={item}>{item}</Text>*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
      <ScrollView>{getListView()}</ScrollView>
    </View>
  );
};
